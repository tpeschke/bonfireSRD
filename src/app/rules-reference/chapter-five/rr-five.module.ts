import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaptersModule } from '../../chapters/chapters.module';
import { Routes, RouterModule } from '@angular/router';
import { RrFiveComponent } from './rr-five/rr-five.component';

const routes: Routes = [
  { path: '', component: RrFiveComponent }];

@NgModule({
  declarations: [
    RrFiveComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChaptersModule
  ]
})
export class RrFiveModule { }
