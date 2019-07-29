import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChapterTenComponent } from './chapter-ten.component';
import { QuickNavModule } from '../quick-nav/quick-nav.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ChapterTenComponent
  }
];

@NgModule({
  declarations: [
    ChapterTenComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    QuickNavModule
  ]
})
export class ChapterTenModule { }
