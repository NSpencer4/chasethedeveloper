import { Component } from '@angular/core';
import { ChartModule } from 'primeng/components/chart/chart';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  data1: any;
  data2: any;
  data3: any;
  data4: any;
  data5: any;
  data6: any;
  options: any;

  public constructor() {
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
    this.data3 = {
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
    this.data4 = {
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
    this.data5 = {
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
    this.data6 = {
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
}
