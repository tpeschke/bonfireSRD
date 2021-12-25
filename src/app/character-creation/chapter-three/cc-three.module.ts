import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaptersModule } from '../../chapters/chapters.module';
import { Routes, RouterModule } from '@angular/router';
import { CcThreeComponent } from './cc-three/cc-three.component';

const routes: Routes = [
  { path: '', component: CcThreeComponent }];

@NgModule({
  declarations: [CcThreeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChaptersModule
  ]
})
export class CcThreeModule { }
