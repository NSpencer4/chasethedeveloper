import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    MdSortModule, MdTableModule, MdDatepickerModule, MdInputModule, MdCardModule, MdCheckboxModule, MdButtonModule,
    MdDialogModule, MdSelectModule, MdNativeDateModule
} from '@angular/material';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';
import 'hammerjs';
import { Ng2CompleterModule } from 'ng2-completer';
import { AccordionModule } from 'primeng/components/accordion/accordion';
import {CalendarModule, SharedModule} from 'primeng/primeng';
import { AppRoutingModule } from './app-routing.module';
import { MdIconModule } from '@angular/material';
import { ChartModule } from 'primeng/components/chart/chart';
import 'chart.js/dist/Chart.min.js';

// Components
import { AppComponent } from './app.component';

// Services
import { ContactFormService } from './services/contact-form/contact-form.service';


// Functions
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HomepageComponent } from './components/homepage/homepage.component';
import { StocksService } from './services/stocks/stocks.service';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HomepageComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    BsDropdownModule.forRoot(),
    FormsModule,
    HttpModule,
    MdInputModule,
    MdCardModule,
    MdCheckboxModule,
    MdButtonModule,
    MdSelectModule,
    BsDropdownModule.forRoot(),
    Ng2CompleterModule,
    MdDialogModule,
    MdSelectModule,
    Ng2CompleterModule,
    AccordionModule,
    SharedModule,
    MdIconModule,
    MdDatepickerModule,
    MdNativeDateModule,
    CalendarModule,
    SharedModule,
    ChartModule,
    MdTableModule,
    MdSortModule,
    AppRoutingModule // Add routes to the app
  ],
  entryComponents: [
  ],
  providers: [ContactFormService, StocksService],
  bootstrap: [AppComponent]
})
export class AppModule { }
