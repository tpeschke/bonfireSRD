import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChapterSixComponent } from './chapter-six.component';
import { ChaptersModule } from '../chapters.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ChapterSixComponent
  }
];

@NgModule({
  declarations: [
    ChapterSixComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChaptersModule
  ]
})
export class ChapterSixModule { }
