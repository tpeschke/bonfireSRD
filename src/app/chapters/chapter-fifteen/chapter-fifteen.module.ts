import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChapterFifteenComponent } from './chapter-fifteen.component';
import { ChaptersModule } from '../chapters.module';
import { Routes, RouterModule } from '@angular/router';
import { BasicGuardService } from '../basic-guard.service';
import { AdvGuardService } from '../adv-guard.service';

const routes: Routes = [
  {
    path: '',
    component: ChapterFifteenComponent,
    canActivate: [BasicGuardService]
  },
  { path: 'deluxe', loadChildren: './chapter-fifteen-advanced/chapter-fifteen-advanced.module#ChapterFifteenAdvancedModule', 
    canActivate: [AdvGuardService] }
];

@NgModule({
  declarations: [
    ChapterFifteenComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChaptersModule
  ]
})
export class ChapterFifteenModule { }
