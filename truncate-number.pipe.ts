import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: 'truncateNumber'})
export class TruncateNumberPipe implements PipeTransform {
    transform(value: number, decimalCount: number): string {
        if (!value) value = 0;
        // compare value === 'undefined' rather than !value to include 0 in the acceptable cases
       if (typeof value === 'undefined' || (decimalCount !== 0 && !decimalCount)) return "";
       return (value % 1 === 0  ? value.toString() : value.toFixed(decimalCount));
    }
}