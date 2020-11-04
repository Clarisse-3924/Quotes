import { Component, OnInit } from '@angular/core';
import {Quote} from '../quote';
@Component({
  selector: 'app-quote',
  templateUrl: './quote.component.html',
  styleUrls: ['./quote.component.css']
})
export class QuoteComponent implements OnInit {
  quotes=[new Quote("New Times","Clarisse Uwizeyimana","God is Good",new Date(2020,2,1)),
new Quote("Igihe","Gihozo","All The time",new Date(2020,11,1))]
  firstnum:number
  lastnum:number
  count:number

  addQuote(emittedQuote){
    this.quotes.push(emittedQuote)
  }

  upvote(i){
      this.quotes[i].upvotes+=1
  }
  downvote(i){
    this.quotes[i].downvotes+=1
  }
  delQuote(i){
    this.quotes.splice(i, 1)
  }
  highestUpvote(){
    this.firstnum = 0
    this.lastnum = 0

    for(this.count=0 ; this.count < this.quotes.length; this.count++) {
      this.lastnum = this.quotes[this.count].upvotes;
      if(this.lastnum > this.firstnum){this.firstnum = this.lastnum}
    }
    return  this.firstnum
  }
  constructor() { }

  ngOnInit() {
  }

}
