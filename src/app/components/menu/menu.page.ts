import { Component, OnInit } from '@angular/core';
import { Router, RouterEvent } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {
    selectedPath = '';
    pages = [
        {
            title: 'Home',
            url: '/menu/home',
            icon: 'home'
        }
    ];

    constructor(
        private router: Router
    ) { }

    ngOnInit() {
        this.router.events.subscribe((event: RouterEvent) => {
            
            if (event && event.url) {
                this.selectedPath = event.url;
            }
        });
    }

}
