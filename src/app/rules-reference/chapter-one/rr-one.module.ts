import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RrOneComponent } from './rr-one/rr-one.component';

import { ChaptersModule } from '../../chapters/chapters.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: RrOneComponent }];

@NgModule({
  declarations: [
    RrOneComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChaptersModule
  ]
})
export class RrOneModule { }
