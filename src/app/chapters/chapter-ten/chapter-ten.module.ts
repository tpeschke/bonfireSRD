import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChapterTenComponent } from './chapter-ten.component';
import { ChaptersModule } from '../chapters.module';
import { Routes, RouterModule } from '@angular/router';
import { BasicGuardService } from '../basic-guard.service';
import { AdvGuardService } from '../adv-guard.service';

const routes: Routes = [
  {
    path: '',
    component: ChapterTenComponent,
    canActivate: [BasicGuardService]
  },
  { path: 'advanced', loadChildren: './chapter-ten-advanced/chapter-ten-advanced.module#ChapterTenAdvancedModule', 
    canActivate: [AdvGuardService] },
];

@NgModule({
  declarations: [
    ChapterTenComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChaptersModule
  ]
})
export class ChapterTenModule { }
