import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChapterTwoComponent } from './chapterTwo/chapter-two.component';
import { DisplayModule } from '../display/display.module' 

@NgModule({
  declarations: [
    ChapterTwoComponent,
  ],
  imports: [
    CommonModule,
    DisplayModule
  ],
  exports: [
    ChapterTwoComponent
  ]
})
export class ChapterTwoModule { }
