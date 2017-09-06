import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { OrangeCalendarComponent } from './orange-calendar/orange-calendar.component';
import { DarkCalendarComponent } from './dark-calendar/dark-calendar.component';

import { HttpModule } from "@angular/http";
import { FormsModule } from "@angular/forms"

@NgModule({
  declarations: [
    AppComponent,
    OrangeCalendarComponent,
    DarkCalendarComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
