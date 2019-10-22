import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChapterFifteenComponent } from './chapter-fifteen.component';
import { ChaptersModule } from '../chapters.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ChapterFifteenComponent
  },
  { path: 'advanced', loadChildren: './chapter-fifteen-advanced/chapter-fifteen-advanced.module#ChapterFifteenAdvancedModule', data: { preload: true } },
];

@NgModule({
  declarations: [
    ChapterFifteenComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChaptersModule
  ]
})
export class ChapterFifteenModule { }
