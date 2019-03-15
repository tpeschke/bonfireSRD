import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChapteroneComponent } from './chapterone/chapterone.component' 
import { DisplayModule } from '../display/display.module' 

@NgModule({
  declarations: [
    ChapteroneComponent
  ],
  imports: [
    CommonModule,
    DisplayModule
  ],
  exports: [
    ChapteroneComponent
  ]
})
export class ChapterOneModule { }
