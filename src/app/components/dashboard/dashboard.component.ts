import { Component, OnInit } from '@angular/core';
import { StocksService } from '../../services/stocks/stocks.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private stocksService: StocksService) {}

  ngOnInit() {
      this.stocksService.getStockPrice('AAPL').subscribe(
      resp1 => {
        console.dir(resp1);
      });
      this.stocksService.getCompanyInfo('AAPL').subscribe(
      resp2 => {
        console.dir(resp2);
      });
      this.stocksService.getCompanyNews('AAPL').subscribe(
      resp3 => {
        console.dir(resp3);
      });
  }

}
