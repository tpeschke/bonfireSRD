import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaptersModule } from '../../chapters/chapters.module';
import { Routes, RouterModule } from '@angular/router';
import { CcOneComponent } from './cc-one/cc-one.component';

const routes: Routes = [
  { path: '', component: CcOneComponent }];

@NgModule({
  declarations: [
    CcOneComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChaptersModule
  ]
})
export class CcOneModule { }
