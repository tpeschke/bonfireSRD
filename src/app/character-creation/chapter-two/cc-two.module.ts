import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaptersModule } from '../../chapters/chapters.module';
import { Routes, RouterModule } from '@angular/router';
import { CcTwoComponent } from './cc-two/cc-two.component';

const routes: Routes = [
  { path: '', component: CcTwoComponent }];

@NgModule({
  declarations: [CcTwoComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChaptersModule
  ]
})
export class CcTwoModule { }
