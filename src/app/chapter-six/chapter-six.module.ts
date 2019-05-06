import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChapterSixComponent } from './main/chapter-six.component';
import { DisplayModule } from '../display/display.module';

@NgModule({
  declarations: [ChapterSixComponent],
  imports: [
    CommonModule,
    DisplayModule
  ],
  exports: [
    ChapterSixComponent
  ]
})
export class ChapterSixModule { }
