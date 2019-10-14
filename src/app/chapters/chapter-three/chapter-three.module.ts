import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChapterThreeComponent } from './chapter-three.component';
import { ChaptersModule } from '../chapters.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ChapterThreeComponent
  },
  { path: 'advanced', loadChildren: './chapter-three-advanced/chapter-three-advanced.module#ChapterThreeAdvancedModule' },
];

@NgModule({
  declarations: [
    ChapterThreeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChaptersModule
  ]
})
export class ChapterThreeModule { }
