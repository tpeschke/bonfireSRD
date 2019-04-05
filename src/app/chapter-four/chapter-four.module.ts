import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChapterFourComponent } from './main/chapter-four.component';
import { DisplayModule } from '../display/display.module'

@NgModule({
  declarations: [
    ChapterFourComponent
  ],
  imports: [
    CommonModule,
    DisplayModule
  ],
  exports: [
    ChapterFourComponent
  ]
})
export class ChapterFourModule { }
