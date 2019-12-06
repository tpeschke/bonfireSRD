import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChapterTwelveComponent } from './chapter-twelve.component';
import { ChaptersModule } from '../chapters.module';
import { Routes, RouterModule } from '@angular/router';
import { BasicGuardService } from '../basic-guard.service';
import { AdvGuardService } from '../adv-guard.service';

const routes: Routes = [
  {
    path: '',
    component: ChapterTwelveComponent,
    canActivate: [BasicGuardService]
  },
  { path: 'advanced', loadChildren: './chapter-twelve-advanced/chapter-twelve-advanced.module#ChapterTwelveAdvancedModule', 
    canActivate: [AdvGuardService]},
];

@NgModule({
  declarations: [
    ChapterTwelveComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChaptersModule
  ]
})
export class ChapterTwelveModule { }
