import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChapterFifteenAdvancedComponent } from './chapter-fifteen-advanced.component';
import { ChaptersModule } from '../../chapters.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: ChapterFifteenAdvancedComponent }
];

@NgModule({
  declarations: [ChapterFifteenAdvancedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChaptersModule
  ]
})
export class ChapterFifteenAdvancedModule { }
