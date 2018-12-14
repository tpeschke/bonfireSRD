import { Directive, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appChapterview]'
})
export class ChapterviewDirective {

  constructor(
    public viewContainerRef: ViewContainerRef
  ) { }

}
