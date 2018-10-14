import webapp2
from utils import APIRequest
import requests
import requests_toolbelt.adapters.appengine
import logging

requests_toolbelt.adapters.appengine.monkeypatch()
STOCK_API_PREFIX = "https://api.iextrading.com/1.0/stock/"


# Gets the price of a given stock ticker
class StockPriceRequest(APIRequest):
    def get(self):
        try:
            stock_ticker = self.request.url.rsplit('/', 1)[1].lower()
            response = requests.get(STOCK_API_PREFIX + stock_ticker + "/price")
            self.response.out.write(response.json())
        except ValueError as e:
            self.abort(code=400, detail=e.message)


# Gets the company information of a given stock ticker
class StockInfoRequest(APIRequest):
    def get(self):
        try:
            stock_ticker = self.request.url.rsplit('/', 1)[1].lower()
            api_response = requests.get(STOCK_API_PREFIX + stock_ticker + "/company")
            response = api_response.text
            self.response.out.write(response)
        except ValueError as e:
            self.abort(code=400, detail=e.message)


# Gets the news of a given stock ticker
class StockNewsRequest(APIRequest):
    def get(self):
        try:
            stock_ticker = self.request.url.rsplit('/', 1)[1].lower()
            api_response = requests.get(STOCK_API_PREFIX + stock_ticker + "/news/last/5")
            response = api_response.text
            self.response.out.write(response)
        except ValueError as e:
            self.abort(code=400, detail=e.message)


app = webapp2.WSGIApplication([
    ('/api/stocks/stock/price.*', StockPriceRequest),
    ('/api/stocks/company/info.*', StockInfoRequest),
    ('/api/stocks/company/news.*', StockNewsRequest)
])
