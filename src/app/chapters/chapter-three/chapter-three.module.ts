import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SelectivePreloadingStrategyService } from '../../selective-preloading.service'
import { ChapterThreeComponent } from './chapter-three.component';
import { ChaptersModule } from '../chapters.module';
import { Routes, RouterModule } from '@angular/router';
import { BasicGuardService } from '../basic-guard.service';
import { AdvGuardService } from '../adv-guard.service';

const routes: Routes = [
  {
    path: '',
    component: ChapterThreeComponent,
    canActivate: [BasicGuardService]
  },
  { path: 'advanced', loadChildren: './chapter-three-advanced/chapter-three-advanced.module#ChapterThreeAdvancedModule', 
    canActivate: [AdvGuardService] },
];

@NgModule({
  declarations: [
    ChapterThreeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChaptersModule
  ]
})
export class ChapterThreeModule { }
