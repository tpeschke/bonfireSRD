import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChapterTenComponent } from './main/chapter-ten.component';
import { DisplayModule } from '../display/display.module';

@NgModule({
  declarations: [ChapterTenComponent],
  imports: [
    CommonModule,
    DisplayModule
  ],
  exports: [
    ChapterTenComponent
  ]
})
export class ChapterTenModule { }
