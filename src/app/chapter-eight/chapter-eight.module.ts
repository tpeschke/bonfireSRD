import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChapterEightComponent } from './chapter-eight.component';
import { QuickNavModule } from '../quick-nav/quick-nav.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ChapterEightComponent
  }
];

@NgModule({
  declarations: [
    ChapterEightComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    QuickNavModule
  ]
})
export class ChapterEightModule { }