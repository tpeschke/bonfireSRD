import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChapterElevenComponent } from './chapter-eleven.component';
import { QuickNavModule } from '../../quick-nav/quick-nav.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ChapterElevenComponent
  }
];

@NgModule({
  declarations: [
    ChapterElevenComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    QuickNavModule
  ]
})
export class ChapterElevenModule { }
