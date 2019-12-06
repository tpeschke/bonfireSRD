import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChapterElevenComponent } from './chapter-eleven.component';
import { ChaptersModule } from '../chapters.module';
import { Routes, RouterModule } from '@angular/router';
import { BasicGuardService } from '../basic-guard.service';
import { AdvGuardService } from '../adv-guard.service';

const routes: Routes = [
  {
    path: '',
    component: ChapterElevenComponent,
    canActivate: [BasicGuardService]
  },
  { path: 'advanced', loadChildren: './chapter-eleven-advanced/chapter-eleven-advanced.module#ChapterElevenAdvancedModule', 
    canActivate: [AdvGuardService] },
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
