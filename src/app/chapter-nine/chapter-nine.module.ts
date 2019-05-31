import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChapterNineComponent } from './main/chapter-nine.component';
import { DisplayModule } from '../display/display.module';

@NgModule({
  declarations: [ChapterNineComponent],
  imports: [
    CommonModule,
    DisplayModule
  ],
  exports: [
    ChapterNineComponent
  ]
})
export class ChapterNineModule { }
