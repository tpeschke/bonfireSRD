import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeSpace'
})
export class RemoveSpacePipe implements PipeTransform {

  transform(value, search): any {
    if (value) {
      if (search) {
        return value.replace(/ |-|_|:|\.|&|'|&|([()])|\//ig, '')
      }
      return value.replace(/ |-|_|:|\.|&|'|&|([()])|\//ig, '').toUpperCase()
    }
  }

}
