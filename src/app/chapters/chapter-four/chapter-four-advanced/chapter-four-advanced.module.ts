import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChapterFourAdvancedComponent } from './chapter-four-advanced.component';
import { ChaptersModule } from '../../chapters.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: ChapterFourAdvancedComponent }
];

@NgModule({
  declarations: [ChapterFourAdvancedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChaptersModule
  ]
})
export class ChapterFourAdvancedModule { }
