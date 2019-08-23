import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChapterNineComponent } from './chapter-nine.component';
import { ChaptersModule } from '../chapters.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ChapterNineComponent
  }
];

@NgModule({
  declarations: [
    ChapterNineComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChaptersModule
  ]
})
export class ChapterNineModule { }
