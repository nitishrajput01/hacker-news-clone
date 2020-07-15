import {Pipe, PipeTransform} from '@angular/core';
import * as moment from 'moment';

@Pipe({
    name: 'modifiedDate'
})

export class DatePipe implements PipeTransform {
    transform(value: any, args: []) {
        return moment(value).fromNow();
    }
}