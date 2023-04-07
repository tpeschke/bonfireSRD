import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ChaptersModule } from '../../chapters/chapters.module';
import { Routes, RouterModule } from '@angular/router';
import { RrSixComponent } from './rr-six/rr-six.component';
import { AdvGuardService } from 'src/app/chapters/adv-guard.service';
import { BasicGuardService } from 'src/app/chapters/basic-guard.service';

const routes: Routes = [
  {
    path: '', component: RrSixComponent
  }
];

@NgModule({
  declarations: [
    RrSixComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChaptersModule
  ]
})
export class RrSixModule { }
