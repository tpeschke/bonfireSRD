import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RrThreeComponent } from './rr-three/rr-three.component';

import { ChaptersModule } from '../../chapters/chapters.module';
import { Routes, RouterModule } from '@angular/router';
import { RrThreeDeluxeComponent } from './rr-three-deluxe/rr-three-deluxe.component';
import { AdvGuardService } from 'src/app/chapters/adv-guard.service';
import { BasicGuardService } from 'src/app/chapters/basic-guard.service';

const routes: Routes = [
  {
    path: '', component: RrThreeComponent,
    canActivate: [BasicGuardService]
  },
  {
    path: 'deluxe', component: RrThreeDeluxeComponent,
    canActivate: [AdvGuardService]
  }
];

@NgModule({
  declarations: [
    RrThreeComponent,
    RrThreeDeluxeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChaptersModule
  ]
})
export class RrThreeModule { }
