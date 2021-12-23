import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaptersModule } from '../../chapters/chapters.module';
import { Routes, RouterModule } from '@angular/router';
import { RrFourComponent } from './rr-four/rr-four.component';

const routes: Routes = [
  { path: '', component: RrFourComponent }];

@NgModule({
  declarations: [
    RrFourComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChaptersModule
  ]
})
export class RrFourModule { }
