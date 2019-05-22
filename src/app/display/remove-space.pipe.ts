import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'removeSpace'
})
export class RemoveSpacePipe implements PipeTransform {

  transform(value): any {
    return value.replace(/ |-/g, '').toUpperCase()
  }

}
