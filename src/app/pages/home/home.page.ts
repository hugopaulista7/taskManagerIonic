import { Component, OnInit } from '@angular/core';
import { UtilService } from 'src/app/services/util/util.service';
import { ModalController } from '@ionic/angular';
import { CreateTaskModalPage } from 'src/app/components/create-task-modal/create-task-modal.page';

@Component({
  selector: 'app-home',
  templateUrl: './home.page.html',
  styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

    constructor(
        private util: UtilService,
        private modalController: ModalController
    ) { }

    ngOnInit() {
    }

    addTask() {
        this.util.showLog('AddTaskFunction');
        this.presentCreateModal();
    }

    private async presentCreateModal() {
        const modal = await this.modalController.create({
            component: CreateTaskModalPage
        });
        
        return await modal.present();
    }
}
