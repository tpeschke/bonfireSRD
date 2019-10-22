import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChapterElevenAdvancedComponent } from './chapter-eleven-advanced.component';
import { ChaptersModule } from '../../chapters.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: ChapterElevenAdvancedComponent }
];

@NgModule({
  declarations: [ChapterElevenAdvancedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChaptersModule
  ]
})
export class ChapterElevenAdvancedModule { }
