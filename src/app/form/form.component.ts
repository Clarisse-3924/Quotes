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
  author:string
  myQuote:any
  MyDate: Date;

  submitQuote(  ){
    this.myQuote= new Quote(this.publisher,this.author,this.quote,this.MyDate)
    this.quote=''
    this.author=''
    this.publisher=''
    this.emitQuote.emit(this.myQuote)
  }




  constructor() { }

  ngOnInit() {
  }

}