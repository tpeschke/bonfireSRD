import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChapterFifteenComponent } from './chapter-fifteen.component';
import { ChaptersModule } from '../chapters.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ChapterFifteenComponent
  }
];

@NgModule({
  declarations: [
    ChapterFifteenComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChaptersModule
  ]
})
export class ChapterFifteenModule { }
