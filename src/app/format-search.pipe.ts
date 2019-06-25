import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'formatSearch'
})
export class FormatSearchPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (value.includes('|')) {
      return value.replace(/\+\)|-\)/ig, '').replace(/\|/ig, " ")
    }
    return value;
  }

}
