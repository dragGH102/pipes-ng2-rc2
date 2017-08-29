import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: 'paginate'})
export class PaginatePipe implements PipeTransform {
    // @params args = merge(currentPage: number, itemsPerPage: number)
    transform(list: any[], args: any[]) : any[] {
        if (!list) return [];

        return list.filter((item, index) =>
        Math.ceil((index + 1) / args[1]) === args[0]
        );
    }
}