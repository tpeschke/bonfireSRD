import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaptersModule } from '../../chapters/chapters.module';
import { Routes, RouterModule } from '@angular/router';
import { RrSevenComponent } from './rr-seven/rr-seven.component';

const routes: Routes = [
  { path: '', component: RrSevenComponent }];

@NgModule({
  declarations: [
    RrSevenComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChaptersModule
  ]
})
export class RrSevenModule { }
