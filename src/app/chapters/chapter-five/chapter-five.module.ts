import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChapterFiveComponent } from './chapter-five.component';
import { ChaptersModule } from '../chapters.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ChapterFiveComponent
  }
];

@NgModule({
  declarations: [
    ChapterFiveComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChaptersModule
  ]
})
export class ChapterFiveModule { }
