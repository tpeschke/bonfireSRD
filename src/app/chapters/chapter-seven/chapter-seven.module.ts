import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChapterSevenComponent } from './chapter-seven.component';
import { ChaptersModule } from '../chapters.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ChapterSevenComponent
  },
  { path: 'advanced', loadChildren: './chapter-seven-advanced/chapter-seven-advanced.module#ChapterSevenAdvancedModule', data: { preload: true } },
];

@NgModule({
  declarations: [
    ChapterSevenComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChaptersModule
  ]
})
export class ChapterSevenModule { }
