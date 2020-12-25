import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChapterTwoComponent } from './chapter-two.component';
import { ChaptersModule } from '../chapters.module';
import { Routes, RouterModule } from '@angular/router';
import { AdvGuardService } from '../adv-guard.service';
import { BasicGuardService } from '../basic-guard.service';

const routes: Routes = [
  {
    path: '',
    component: ChapterTwoComponent,
    canActivate: [BasicGuardService]

  },
  { path: 'deluxe', loadChildren: './chapter-two-advanced/chapter-two-advanced.module#ChapterTwoAdvancedModule',
    canActivate: [AdvGuardService]
  }
];

@NgModule({
  declarations: [
    ChapterTwoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChaptersModule
  ]
})
export class ChapterTwoModule { }
