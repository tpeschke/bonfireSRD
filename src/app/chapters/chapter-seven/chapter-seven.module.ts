import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChapterSevenComponent } from './chapter-seven.component';
import { ChaptersModule } from '../chapters.module';
import { Routes, RouterModule } from '@angular/router';
import { BasicGuardService } from '../basic-guard.service';
import { AdvGuardService } from '../adv-guard.service';

const routes: Routes = [
  {
    path: '',
    component: ChapterSevenComponent,
    canActivate: [BasicGuardService]
  },
  { path: 'advanced', loadChildren: './chapter-seven-advanced/chapter-seven-advanced.module#ChapterSevenAdvancedModule', 
    canActivate: [AdvGuardService]},
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
