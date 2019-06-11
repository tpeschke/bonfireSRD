import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChapterTwelveComponent } from './main/chapter-twelve.component';
import { DisplayModule } from '../display/display.module';

@NgModule({
  declarations: [ChapterTwelveComponent],
  imports: [
    CommonModule,
    DisplayModule
  ],
  exports: [
    ChapterTwelveComponent
  ]
})
export class ChapterTwelveModule { }
