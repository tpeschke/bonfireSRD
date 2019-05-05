import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChapterFiveComponent } from './main/chapter-five.component';
import { DisplayModule } from '../display/display.module' 

@NgModule({
  declarations: [
    ChapterFiveComponent
  ],
  imports: [
    CommonModule,
    DisplayModule
  ],
  exports: [
    ChapterFiveComponent
  ]
})
export class ChapterFiveModule { }
