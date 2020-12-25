import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChapterThirteenComponent } from './chapter-thirteen.component';
import { ChaptersModule } from '../chapters.module';
import { Routes, RouterModule } from '@angular/router';
import { BasicGuardService } from '../basic-guard.service';
import { AdvGuardService } from '../adv-guard.service';

const routes: Routes = [
  {
    path: '',
    component: ChapterThirteenComponent,
    canActivate: [BasicGuardService]
  },
  { path: 'deluxe', loadChildren: './chapter-thirteen-advanced/chapter-thirteen-advanced.module#ChapterThirteenAdvancedModule', 
    canActivate: [AdvGuardService]},
];

@NgModule({
  declarations: [
    ChapterThirteenComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChaptersModule
  ]
})
export class ChapterThirteenModule { }
