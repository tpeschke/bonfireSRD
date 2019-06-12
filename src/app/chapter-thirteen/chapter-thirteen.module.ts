import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChapterThirteenComponent } from './main/chapter-thirteen.component';
import { DisplayModule } from '../display/display.module';

@NgModule({
  declarations: [ChapterThirteenComponent],
  imports: [
    CommonModule,
    DisplayModule
  ],
  exports: [
    ChapterThirteenComponent
  ]
})
export class ChapterThirteenModule { }
