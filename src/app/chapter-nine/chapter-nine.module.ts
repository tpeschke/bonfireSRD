import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChapterNineComponent } from './chapter-nine.component';
import { QuickNavModule } from '../quick-nav/quick-nav.module';
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
    QuickNavModule
  ]
})
export class ChapterNineModule { }
