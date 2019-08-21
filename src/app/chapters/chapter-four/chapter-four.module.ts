import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChapterFourComponent } from './chapter-four.component';
import { QuickNavModule } from '../../quick-nav/quick-nav.module';
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
    QuickNavModule
  ]
})
export class ChapterFourModule { }
