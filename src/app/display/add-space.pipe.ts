import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'addSpace'
})
export class AddSpacePipe implements PipeTransform {

  transform(value): any {
    if (isNaN(value)) {
      return value.replace(/_/g, ' ')
    }
    return value;
  }

}
