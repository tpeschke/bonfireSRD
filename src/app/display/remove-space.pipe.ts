import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeSpace'
})
export class RemoveSpacePipe implements PipeTransform {

  transform(value): any {
    if (value) {
      return value.replace(/ |-|([()])|\//ig, '').toUpperCase()
    }
  }

}
