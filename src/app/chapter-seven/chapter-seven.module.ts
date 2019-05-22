import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChapterSevenComponent } from './main/chapter-seven.component';
import { DisplayModule } from '../display/display.module';

@NgModule({
  declarations: [ChapterSevenComponent],
  imports: [
    CommonModule,
    DisplayModule
  ],
  exports: [
    ChapterSevenComponent
  ]
})
export class ChapterSevenModule { }
