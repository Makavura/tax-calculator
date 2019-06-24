import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule} from '@angular/router';
import { FormsModule } from '@angular/forms'

import { AppComponent } from './app.component';
import { PayeComponent } from './paye/paye.component';
import {PayeCalculatorService} from './_services/paye-calculator.service';

@NgModule({
  declarations: [
    AppComponent,
    PayeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([])
  ],
  providers: [PayeCalculatorService],
  bootstrap: [AppComponent]
})
export class AppModule { }
