import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/util/util.service';
import { ModalController } from '@ionic/angular';
import { CreateTaskModalPage } from 'src/app/components/create-task-modal/create-task-modal.page';
import { StorageService } from 'src/app/services/storage/storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

    tasks = [];

    constructor(
        private util: UtilService,
        private modalController: ModalController,
        private storage: StorageService
    ) { }

    ngOnInit() {
        this.storage.getStorage('tasks').then(res => {
            this.tasks = res;
            this.util.showLog('tasks home', this.tasks);
            this.tasks.length > 0 ? this.tasks.forEach((element, index) => {
                if (element.active) {
                    this.setCountDown(element.date, index);
                }
            }) : null;
        }).catch(err => {
            this.util.showLog('error get tasks home', err);
        });
    }

    addTask() {
        this.util.showLog('AddTaskFunction');
        this.presentCreateModal();

    }

    setCountDown(date, index) {
        const countDownDate = date;

        let interval = setInterval(() => {
            const now = new Date().getTime();

            const distance = countDownDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 *60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60) ) / 1000);

            this.tasks[index].countdown = `${days}d ${hours}h ${minutes}m ${seconds}s`;

            if (distance < 0 ) {
                clearInterval(interval);
                this.tasks[index].countdown = 'EXPIROU';
                this.tasks[index].active = false;
            }

        }, 1000);
    }

    private async presentCreateModal() {
        const modal = await this.modalController.create({
            component: CreateTaskModalPage,
            
        });
        
        await modal.present();

        const { data } = await modal.onDidDismiss();
        this.ngOnInit();
    }
}
