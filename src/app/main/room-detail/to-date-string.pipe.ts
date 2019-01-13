import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'toDateString'
})
export class ToDateStringPipe implements PipeTransform {

    transform(value: any): any {
        const date = new Date(value);
        console.log(date);
        return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
    }

}
