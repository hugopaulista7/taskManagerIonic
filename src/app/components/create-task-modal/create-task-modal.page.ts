import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-create-task-modal',
  templateUrl: './create-task-modal.page.html',
  styleUrls: ['./create-task-modal.page.scss'],
})
export class CreateTaskModalPage implements OnInit {

    constructor(
        private modalContoller: ModalController
    ) { }

    ngOnInit() {
    }

    close() {
        this.modalContoller.dismiss();
    }
}
