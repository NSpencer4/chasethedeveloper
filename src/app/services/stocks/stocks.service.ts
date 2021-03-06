import { Injectable } from '@angular/core';
import { Http } from '@angular/http';

@Injectable()
export class StocksService {

  constructor(private http: Http) { }

  // Gets the current stock price for a given ticker.
  getStockPrice(stockTicker) {
    return this.http.get('/api/stocks/stock/price/' + stockTicker).map(
      response => {
        return response.json();
      },
        err => {
          console.log('Error occurred');
      });
  }

  // Gets information of a given company.
  getCompanyInfo(stockTicker) {
    return this.http.get('/api/stocks/company/info/' + stockTicker).map(
      response => {
        return response.json();
      },
        err => {
          console.log('Error occurred');
      });
  }

  // Gets information of a given company.
  getCompanyNews(stockTicker) {
    return this.http.get('/api/stocks/company/news/' + stockTicker).map(
      response => {
        return response.json();
      },
        err => {
          console.log('Error occurred');
      });
  }
}
