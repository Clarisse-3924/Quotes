import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from "@angular/forms"

import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { DetailsComponent } from './details/details.component';
import { QuoteComponent } from './quote/quote.component';
import { HighlightDirective } from './highlight.directive';
import { DayspassedPipe } from './dayspassed.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    DetailsComponent,
    QuoteComponent,
    HighlightDirective,
    DayspassedPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }