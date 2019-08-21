import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChapterFourteenComponent } from './chapter-fourteen.component';
import { QuickNavModule } from '../../quick-nav/quick-nav.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ChapterFourteenComponent
  }
];

@NgModule({
  declarations: [
    ChapterFourteenComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    QuickNavModule
  ]
})
export class ChapterFourteenModule { }
