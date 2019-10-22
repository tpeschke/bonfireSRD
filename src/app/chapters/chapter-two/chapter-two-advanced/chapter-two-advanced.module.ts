import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChapterTwoAdvancedComponent } from './chapter-two-advanced.component';
import { ChaptersModule } from '../../chapters.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: ChapterTwoAdvancedComponent }
];

@NgModule({
  declarations: [ChapterTwoAdvancedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChaptersModule
  ]
})
export class ChapterTwoAdvancedModule { }
