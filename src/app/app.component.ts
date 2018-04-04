import {Component, OnInit} from '@angular/core';
import { ChartModule } from 'primeng/components/chart/chart';
import { Chart } from 'chart.js';
import { ContactFormService } from './services/contact-form.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit{
  data1: any;
  data2: any;
  options: any;
  mail: any;

  public constructor(private contactFormService: ContactFormService) {
    this.data1 = {
      datasets: [
        {
          data: [100, 0],
          backgroundColor: [
            '#3ebdf0',
            '#cbcacb'
          ],
          hoverBackgroundColor: [
            '#3ebdf0',
            '#cbcacb'
          ]
        }]
    };
    this.data2 = {
      datasets: [
        {
          data: [90, 10],
          backgroundColor: [
            '#3ebdf0',
            '#cbcacb'
          ],
          hoverBackgroundColor: [
            '#3ebdf0',
            '#cbcacb'
          ]
        }]
    };

    this.options = {
      cutoutPercentage: 80
    };
    Chart.defaults.global.tooltips.enabled = false;
  }
  ngOnInit() {
    this.mail = {
      name: '',
      email: '',
      message: ''
    };
  }

  public sendMessage () {
    this.contactFormService.emailOwner(this.mail);
  }
}
