import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaptersModule } from '../../chapters/chapters.module';
import { Routes, RouterModule } from '@angular/router';
import { CcFourComponent } from './cc-four/cc-four.component';

const routes: Routes = [
  { path: '', component: CcFourComponent }];

@NgModule({
  declarations: [CcFourComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChaptersModule
  ]
})
export class CcFourModule { }
