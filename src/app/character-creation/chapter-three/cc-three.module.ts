import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaptersModule } from '../../chapters/chapters.module';
import { Routes, RouterModule } from '@angular/router';
import { CcThreeComponent } from './cc-three/cc-three.component';
import { CcThreeDeluxeComponent } from './cc-three-deluxe/cc-three-deluxe.component';
import { BasicGuardService } from 'src/app/chapters/basic-guard.service';
import { AdvGuardService } from 'src/app/chapters/adv-guard.service';
import { WeirdTableComponent } from './weirdTable/weirdTable.component';

const routes: Routes = [
  {
    path: '', component: CcThreeComponent,
    canActivate: [BasicGuardService]
  },
  {
    path: 'deluxe', component: CcThreeDeluxeComponent,
    canActivate: [AdvGuardService]
  }];

@NgModule({
  declarations: [CcThreeComponent, CcThreeDeluxeComponent, WeirdTableComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChaptersModule
  ]
})
export class CcThreeModule { }
