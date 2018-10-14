import { Component, OnInit } from '@angular/core';
import { ChartModule } from 'primeng/components/chart/chart';
import { Chart } from 'chart.js';
import { ContactFormService } from '../../services/contact-form/contact-form.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent implements OnInit {
  data1: any;
  data2: any;
  options: any;
  mail: any;
  showForm: any;

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
    this.showForm = true;
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
    this.showForm = false;
  }
}
