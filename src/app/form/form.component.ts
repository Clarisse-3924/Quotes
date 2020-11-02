import { Component, OnInit,Output,EventEmitter } from '@angular/core';
import { Quote} from '../quote';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output() emitQuote= new EventEmitter()
  quote:string
  publisher:string
  Author:string
  myQuote:any
  quoteMyDate: Date;

  submitQuote(  ){
    this.myQuote= new Quote(this.publisher,this.Author,this.quote,this.quoteMyDate)
    this.quote=''
    this.Author=''
    this.publisher=''
    this.emitQuote.emit(this.myQuote)
  }




  constructor() { }

  ngOnInit() {
  }

}