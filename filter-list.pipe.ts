import {Pipe, PipeTransform} from "@angular/core";

@Pipe({name: 'filterList'})
export class FilterListPipe implements PipeTransform {
    // @params args = merge(fields: string[], value: string)
    transform(list: any[], args: any[]) : any[] {
        let showItem: boolean;
        if (!list) return [];
        return list.filter(item => {
            showItem = false;
            for (let i = 1; i < args.length; i++) {
                if (showItem) continue;
                // no filter
                if (!args[0]) {
                    showItem = true;
                    continue;
                }
                // filter
                let itemToMatch: string;
                if (args[i].indexOf('.') !== -1) {
                    // nested property
                    let subArgs = args[i].split('.');
                    itemToMatch = item[subArgs[0]][subArgs[1]];
                } else itemToMatch = item[args[i]];

                if (itemToMatch.indexOf(args[0]) !== -1) showItem = true;
            }
            return showItem;
        });
    }
}