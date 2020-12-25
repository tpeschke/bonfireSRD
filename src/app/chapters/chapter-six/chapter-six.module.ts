import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChapterSixComponent } from './chapter-six.component';
import { ChaptersModule } from '../chapters.module';
import { Routes, RouterModule } from '@angular/router';
import { BasicGuardService } from '../basic-guard.service';
import { AdvGuardService } from '../adv-guard.service';

const routes: Routes = [
  {
    path: '',
    component: ChapterSixComponent,
    canActivate: [BasicGuardService]
  },
  { path: 'deluxe', loadChildren: './chapter-six-advanced/chapter-six-advanced.module#ChapterSixAdvancedModule', 
    canActivate: [AdvGuardService]},
];

@NgModule({
  declarations: [
    ChapterSixComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChaptersModule
  ]
})
export class ChapterSixModule { }
