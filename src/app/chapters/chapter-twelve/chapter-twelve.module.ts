import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChapterTwelveComponent } from './chapter-twelve.component';
import { ChaptersModule } from '../chapters.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ChapterTwelveComponent
  }
];

@NgModule({
  declarations: [
    ChapterTwelveComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChaptersModule
  ]
})
export class ChapterTwelveModule { }
