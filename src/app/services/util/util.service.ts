import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

    constructor() { }

    public showLog(message, variable = {}) {
        console.log(message, variable);
    }


    public getMothNames() {
        return [
            'JAN',
            'FEV',
            'MAR',
            'ABR',
            'MAI',
            'JUN',
            'JUL',
            'AGO',
            'SET',
            'OUT',
            'NOV',
            'DEZ'
        ];
    }
}
