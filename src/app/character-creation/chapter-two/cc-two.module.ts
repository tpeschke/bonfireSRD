import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaptersModule } from '../../chapters/chapters.module';
import { Routes, RouterModule } from '@angular/router';
import { CcTwoComponent } from './cc-two/cc-two.component';
import { CcTwoDeluxeComponent } from './cc-two-deluxe/cc-two-deluxe.component';
import { BasicGuardService } from 'src/app/chapters/basic-guard.service';
import { AdvGuardService } from 'src/app/chapters/adv-guard.service';

const routes: Routes = [
  {
    path: '', component: CcTwoComponent,
    canActivate: [BasicGuardService]
  },
  {
    path: 'deluxe', component: CcTwoDeluxeComponent,
    canActivate: [AdvGuardService]
  }
];

@NgModule({
  declarations: [CcTwoComponent, CcTwoDeluxeComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChaptersModule
  ]
})
export class CcTwoModule { }
