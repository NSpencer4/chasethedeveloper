import { Component } from '@angular/core';
import { ChartModule } from 'primeng/components/chart/chart';
import { Chart } from 'chart.js';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})

export class AppComponent {
  data: any;
  options: any;

  public constructor() {
    this.data = {
        datasets: [
            {
                data: [80, 20],
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
