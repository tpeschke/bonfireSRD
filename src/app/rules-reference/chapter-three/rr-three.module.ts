import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RrThreeComponent } from './rr-three/rr-three.component';

import { ChaptersModule } from '../../chapters/chapters.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: RrThreeComponent }];

@NgModule({
  declarations: [
    RrThreeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChaptersModule
  ]
})
export class RrThreeModule { }
