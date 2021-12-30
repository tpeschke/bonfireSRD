import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaptersModule } from '../../chapters/chapters.module';
import { Routes, RouterModule } from '@angular/router';
import { RrSevenComponent } from './rr-seven/rr-seven.component';
import { RrSevenDeluxeComponent } from './rr-seven-deluxe/rr-seven-deluxe.component';
import { BasicGuardService } from 'src/app/chapters/basic-guard.service';
import { AdvGuardService } from 'src/app/chapters/adv-guard.service';

const routes: Routes = [
  {
    path: '', component: RrSevenComponent,
    canActivate: [BasicGuardService]
  },
  {
    path: 'deluxe', component: RrSevenDeluxeComponent,
    canActivate: [AdvGuardService]
  }
];

@NgModule({
  declarations: [
    RrSevenComponent,
    RrSevenDeluxeComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChaptersModule
  ]
})
export class RrSevenModule { }
