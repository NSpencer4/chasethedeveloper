import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    public constructor(){}

    windowWidth: any;
    windowHeight: any;

    ngOnInit() {
      this.windowHeight = window.innerHeight;
      this.windowWidth = window.innerWidth;
    }
}
