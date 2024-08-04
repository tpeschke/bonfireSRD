import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaptersModule } from '../../chapters/chapters.module';
import { Routes, RouterModule } from '@angular/router';
import { CcZeroComponent } from './cc-zero/cc-zero.component';

const routes: Routes = [
  { path: '', component: CcZeroComponent }];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChaptersModule
  ],
  declarations: [CcZeroComponent]
})
export class CcZeroModule { }
