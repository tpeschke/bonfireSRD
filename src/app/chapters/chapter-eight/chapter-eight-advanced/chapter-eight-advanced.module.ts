import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChapterEightAdvancedComponent } from './chapter-eight-advanced.component';
import { ChaptersModule } from '../../chapters.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: ChapterEightAdvancedComponent }
];

@NgModule({
  declarations: [ChapterEightAdvancedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChaptersModule
  ]
})
export class ChapterEightAdvancedModule { }
