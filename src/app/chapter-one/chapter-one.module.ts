import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChapterOneComponent } from './chapter-one.component';
import { QuickNavModule } from '../quick-nav/quick-nav.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ChapterOneComponent
  }
];

@NgModule({
  declarations: [
    ChapterOneComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    QuickNavModule
  ]
})
export class ChapterOneModule { }
