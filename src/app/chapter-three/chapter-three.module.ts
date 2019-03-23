import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChapterThreeComponent } from './chapter-three/chapter-three.component';
import { DisplayModule } from '../display/display.module' 

@NgModule({
  declarations: [
    ChapterThreeComponent
  ],
  imports: [
    CommonModule,
    DisplayModule
  ],
  exports: [
    ChapterThreeComponent
  ]
})
export class ChapterThreeModule { }
