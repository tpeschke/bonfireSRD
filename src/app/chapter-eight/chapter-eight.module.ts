import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChapterEightComponent } from './main/chapter-eight.component';
import { DisplayModule } from '../display/display.module';

@NgModule({
  declarations: [ChapterEightComponent],
  imports: [
    CommonModule,
    DisplayModule
  ],
  exports: [
    ChapterEightComponent
  ]
})
export class ChapterEightModule { }
