import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'modifiedUrl'
})

export class UrlPipe implements PipeTransform {
    transform(value: any, args: []) {
        const url_value = value ? /(http[s]?:\/\/)?([^\/\s]+)(.*)/.exec(value)[2] : null;
        return url_value;
    }
}