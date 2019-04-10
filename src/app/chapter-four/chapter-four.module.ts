import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChapterFourComponent } from './main/chapter-four.component';
import { DisplayModule } from '../display/display.module';
import { QuickNavComponent } from './quick-nav/quick-nav.component';

@NgModule({
  declarations: [
    ChapterFourComponent,
    QuickNavComponent
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
