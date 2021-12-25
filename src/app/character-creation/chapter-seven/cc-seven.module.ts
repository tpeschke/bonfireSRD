import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaptersModule } from '../../chapters/chapters.module';
import { Routes, RouterModule } from '@angular/router';
import { CcSevenComponent } from './cc-seven/cc-seven.component';

const routes: Routes = [
  { path: '', component: CcSevenComponent }];

@NgModule({
  declarations: [
    CcSevenComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChaptersModule
  ]
})
export class CcSevenModule { }
