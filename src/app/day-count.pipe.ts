import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dayCount'
})
export class DayCountPipe implements PipeTransform {

  transform(value: any): string {

    let values = value.split("-");
    let year= parseInt( values[0]);
    let month= parseInt( values[1]);
    let day = parseInt( values[2]);

    let today:any=new Date();

    let todayWithNoTime:any=new Date(today.getFullYear(),today.getMonth(),today.getDate());
    let valueWithNoTime:any= new Date(year, month, day);

    var dateDifference = Math.abs(valueWithNoTime-todayWithNoTime);
    const secondsInDay=86400;
    var dateDifferenceSeconds=dateDifference*0.001;


    if(dateDifferenceSeconds<60) return ` Just now`;
    else if(dateDifferenceSeconds<3600) return `${Math.floor(dateDifferenceSeconds/60)} Minutes ago`;
    else if(dateDifferenceSeconds<86400) return `${Math.floor(dateDifferenceSeconds/3600)}  Hours ago` ;
    else return `${Math.floor(dateDifferenceSeconds/86400)} Days ago`;

  }

}
