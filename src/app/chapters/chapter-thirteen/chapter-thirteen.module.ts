import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChapterThirteenComponent } from './chapter-thirteen.component';
import { ChaptersModule } from '../chapters.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ChapterThirteenComponent
  }
];

@NgModule({
  declarations: [
    ChapterThirteenComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChaptersModule
  ]
})
export class ChapterThirteenModule { }
