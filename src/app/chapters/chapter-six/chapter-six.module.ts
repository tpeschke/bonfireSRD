import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChapterSixComponent } from './chapter-six.component';
import { ChaptersModule } from '../chapters.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: ChapterSixComponent
  },
  { path: 'advanced', loadChildren: './chapter-six-advanced/chapter-six-advanced.module#ChapterSixAdvancedModule', data: { preload: true } },
];

@NgModule({
  declarations: [
    ChapterSixComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChaptersModule
  ]
})
export class ChapterSixModule { }
