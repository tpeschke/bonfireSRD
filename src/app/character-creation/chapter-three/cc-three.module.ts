import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaptersModule } from '../../chapters/chapters.module';
import { Routes, RouterModule } from '@angular/router';
import { CcThreeComponent } from './cc-three/cc-three.component';
import { WeirdTableComponent } from './weirdTable/weirdTable.component';

const routes: Routes = [
  { path: '', component: CcThreeComponent }];

@NgModule({
  declarations: [CcThreeComponent, WeirdTableComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChaptersModule
  ]
})
export class CcThreeModule { }
