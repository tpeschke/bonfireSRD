import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChapterEightComponent } from './chapter-eight.component';
import { ChaptersModule } from '../chapters.module';
import { Routes, RouterModule } from '@angular/router';
import { AdvGuardService } from '../adv-guard.service'

const routes: Routes = [
  {
    path: '',
    component: ChapterEightComponent,
    canActivate: [AdvGuardService]
  },
  { path: 'advanced', loadChildren: './chapter-eight-advanced/chapter-eight-advanced.module#ChapterEightAdvancedModule', data: { preload: true } },
];

@NgModule({
  declarations: [
    ChapterEightComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChaptersModule
  ]
})
export class ChapterEightModule { }
