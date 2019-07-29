import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChapterSevenComponent } from './chapter-seven.component';
import { QuickNavModule } from '../quick-nav/quick-nav.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ChapterSevenComponent
  }
];

@NgModule({
  declarations: [
    ChapterSevenComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    QuickNavModule
  ]
})
export class ChapterSevenModule { }
