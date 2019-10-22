import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChapterElevenComponent } from './chapter-eleven.component';
import { ChaptersModule } from '../chapters.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ChapterElevenComponent
  },
  { path: 'advanced', loadChildren: './chapter-eleven-advanced/chapter-eleven-advanced.module#ChapterElevenAdvancedModule', data: { preload: true } },
];

@NgModule({
  declarations: [
    ChapterElevenComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChaptersModule
  ]
})
export class ChapterElevenModule { }
