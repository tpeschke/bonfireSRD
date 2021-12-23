import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RrTwoComponent } from './rr-two/rr-two.component';

import { ChaptersModule } from '../../chapters/chapters.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: RrTwoComponent }];


@NgModule({
  declarations: [
    RrTwoComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChaptersModule
  ]
})
export class RrTwoModule { }
