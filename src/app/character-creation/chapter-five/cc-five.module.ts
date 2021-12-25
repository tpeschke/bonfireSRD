import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaptersModule } from '../../chapters/chapters.module';
import { Routes, RouterModule } from '@angular/router';
import { CcFiveComponent } from './cc-five/cc-five.component';

const routes: Routes = [
  { path: '', component: CcFiveComponent }];

@NgModule({
  declarations: [
    CcFiveComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChaptersModule
  ]
})
export class CcFiveModule { }
