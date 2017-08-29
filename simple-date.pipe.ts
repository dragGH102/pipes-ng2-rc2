import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: 'simpleDate'})
export class SimpleDatePipe implements PipeTransform {
    //convert Unix timestamp [s] to Date [ms] and extract day [1+] and month [0+]
    transform(timestamp:number, filter: string) : string {
        switch(filter){
            case "day":
                let dayString = new Date(timestamp*1000).getDate().toString();
                if (dayString.length < 2) dayString = "0" + dayString;
                return dayString;
            case "month":
                let monthString = (new Date(timestamp*1000).getMonth() + 1).toString();
                if (monthString.length < 2) monthString = "0" + monthString;
                return monthString;
            case "fullyear":
                return (new Date(timestamp*1000).getFullYear()).toString();
        }
    }
}