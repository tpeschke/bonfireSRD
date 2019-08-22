import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChapterTwoComponent } from './chapter-two.component';
import { ChaptersModule } from '../chapters.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ChapterTwoComponent
  }
];

@NgModule({
  declarations: [
    ChapterTwoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChaptersModule
  ]
})
export class ChapterTwoModule { }
