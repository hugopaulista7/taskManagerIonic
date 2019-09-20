import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-create-task-modal',
  templateUrl: './create-task-modal.page.html',
  styleUrls: ['./create-task-modal.page.scss'],
})
export class CreateTaskModalPage implements OnInit {

    public taskForm: FormGroup;

    constructor(
        private modalContoller: ModalController,
        private formBuilder: FormBuilder
    ) { }

    ngOnInit() {
        this.taskForm = this.formBuilder.group({
            name: ['', Validators.compose([
                Validators.maxLength(25),
                Validators.minLength(4),
                Validators.required
            ])],
            description: ['', Validators.compose([
                Validators.maxLength(255),
            ])],
            color: ['#3880ff'],
            date: [Date.now()]
        });
    }

    close() {
        this.modalContoller.dismiss();
    }
}
