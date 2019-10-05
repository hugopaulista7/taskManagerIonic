import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';

@Injectable({
    providedIn: 'root'
})
export class StorageService {

    constructor(
        private storage: Storage
    ) { }

    public setStorage(key, data) {
        this.storage.set(key, data);
    }

    public getStorage(key): Promise<any> {
        return this.storage.get(key); 
    }
}
