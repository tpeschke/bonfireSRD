import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaptersModule } from '../../chapters/chapters.module';
import { Routes, RouterModule } from '@angular/router';
import { CcSixComponent } from './cc-six/cc-six.component';

const routes: Routes = [
  { path: '', component: CcSixComponent }];

@NgModule({
  declarations: [CcSixComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChaptersModule
  ]
})
export class CcSixModule { }