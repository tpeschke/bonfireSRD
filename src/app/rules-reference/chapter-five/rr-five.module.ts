import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaptersModule } from '../../chapters/chapters.module';
import { Routes, RouterModule } from '@angular/router';
import { RrFiveComponent } from './rr-five/rr-five.component';
import { RrFiveDeluxeComponent } from './rr-five-deluxe/rr-five-deluxe.component';
import { BasicGuardService } from 'src/app/chapters/basic-guard.service';
import { AdvGuardService } from 'src/app/chapters/adv-guard.service';

const routes: Routes = [
  {
    path: '', component: RrFiveComponent,
    canActivate: [BasicGuardService]
  },
  {
    path: 'deluxe', component: RrFiveDeluxeComponent,
    canActivate: [AdvGuardService]
  }
];

@NgModule({
  declarations: [
    RrFiveComponent,
    RrFiveDeluxeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChaptersModule
  ]
})
export class RrFiveModule { }
