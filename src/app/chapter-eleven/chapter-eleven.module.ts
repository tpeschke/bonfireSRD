import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChapterElevenComponent } from './main/chapter-eleven.component';
import { DisplayModule } from '../display/display.module';


@NgModule({
  declarations: [ChapterElevenComponent],
  imports: [
    CommonModule,
    DisplayModule
  ],
  exports: [
    ChapterElevenComponent
  ]
})
export class ChapterElevenModule { }
