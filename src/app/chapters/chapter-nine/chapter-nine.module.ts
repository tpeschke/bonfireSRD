import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChapterNineComponent } from './chapter-nine.component';
import { ChaptersModule } from '../chapters.module';
import { Routes, RouterModule } from '@angular/router';
import { BasicGuardService } from '../basic-guard.service';
import { AdvGuardService } from '../adv-guard.service';

const routes: Routes = [
  {
    path: '',
    component: ChapterNineComponent,
    canActivate: [BasicGuardService]
  },
  { path: 'advanced', loadChildren: './chapter-nine-advanced/chapter-nine-advanced.module#ChapterNineAdvancedModule',
    canActivate: [AdvGuardService]},
];

@NgModule({
  declarations: [
    ChapterNineComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChaptersModule
  ]
})
export class ChapterNineModule { }
