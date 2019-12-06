import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChapterFourComponent } from './chapter-four.component';
import { ChaptersModule } from '../chapters.module';
import { Routes, RouterModule } from '@angular/router';
import { BasicGuardService } from '../basic-guard.service';
import { AdvGuardService } from '../adv-guard.service';

const routes: Routes = [
  {
    path: '',
    component: ChapterFourComponent,
    canActivate: [BasicGuardService]
  },
  { path: 'advanced', loadChildren: './chapter-four-advanced/chapter-four-advanced.module#ChapterFourAdvancedModule',
    canActivate: [AdvGuardService]
  }
];

@NgModule({
  declarations: [
    ChapterFourComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChaptersModule
  ]
})
export class ChapterFourModule { }
