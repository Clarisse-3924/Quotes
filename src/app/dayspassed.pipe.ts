import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dayspassed'
})
export class DayspassedPipe implements PipeTransform {

  transform(value: any): number {
    let today:Date = new Date(); 
    let todayWithNoTime:any = new Date(today.getFullYear(), today.getMonth())
    var dateDifference = Math.abs(value - todayWithNoTime) 
    const secondsInDay = 86400; 
    var dateDifferenceSeconds = dateDifference*0.001; 
    var dateCounter = dateDifferenceSeconds/secondsInDay
    return Math.floor(dateCounter)

  }

}
