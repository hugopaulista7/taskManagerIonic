import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UtilService } from 'src/app/services/util/util.service';
import { StorageService } from 'src/app/services/storage/storage.service';
@Component({
  selector: 'app-create-task-modal',
  templateUrl: './create-task-modal.page.html',
  styleUrls: ['./create-task-modal.page.scss'],
})
export class CreateTaskModalPage implements OnInit {

    public form: FormGroup;
    monthNames = this.util.getMothNames();
    constructor(
        private modalContoller: ModalController,
        private formBuilder: FormBuilder,
        public util: UtilService,
        private storage: StorageService
    ) { }

    ngOnInit() {
        this.form = this.formBuilder.group({
            name: ['', Validators.compose([
                Validators.maxLength(25),
                Validators.minLength(4),
                Validators.required
            ])],
            description: ['', Validators.compose([
                Validators.maxLength(255),
            ])],
            date: ['', Validators.compose([
                Validators.required
            ])]
        });
    }

    save() {
        if (this.form.valid) {
            const task = {
                name: this.form.controls.name.value,
                description: this.form.controls.description.value,
                date: Date.parse(this.form.controls.date.value),
                active: true,
                countdown: ''
            };
            this.util.showLog('task', task);

            this.storage.getStorage('tasks').then(res => {
                this.util.showLog('res storage', res);
                if (res === null) {
                    res = [];
                }
                res.push(task);
                this.storage.setStorage('tasks', res);
                this.close();
            }).catch(err => {
                this.util.showLog('Error get storage', err);
            })
        }
    }

    close() {
        this.modalContoller.dismiss();
    }
}
