import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: 'timezonePrefix'})
export class TimezonePrefixPipe implements PipeTransform {
    transform(timezone: number): string {
       if (timezone === 0) return "";
       return (timezone > 0 ? "+" : "") + timezone;
    }
}