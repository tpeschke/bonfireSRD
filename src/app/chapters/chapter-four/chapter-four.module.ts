import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChapterFourComponent } from './chapter-four.component';
import { ChaptersModule } from '../chapters.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ChapterFourComponent
  }
];

@NgModule({
  declarations: [
    ChapterFourComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChaptersModule
  ]
})
export class ChapterFourModule { }
