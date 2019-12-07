import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChapterEightComponent } from './chapter-eight.component';
import { ChaptersModule } from '../chapters.module';
import { Routes, RouterModule } from '@angular/router';
import { BasicGuardService } from '../basic-guard.service';
import { AdvGuardService } from '../adv-guard.service';

const routes: Routes = [
  {
    path: '',
    component: ChapterEightComponent,
    canActivate: [BasicGuardService]
  },
  { path: 'advanced', 
    loadChildren: './chapter-eight-advanced/chapter-eight-advanced.module#ChapterEightAdvancedModule',
    canActivate: [AdvGuardService]
}
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
