import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChapterSevenAdvancedComponent } from './chapter-seven-advanced.component';
import { ChaptersModule } from '../../chapters.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: ChapterSevenAdvancedComponent }
];

@NgModule({
  declarations: [ChapterSevenAdvancedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChaptersModule
  ]
})
export class ChapterSevenAdvancedModule { }
