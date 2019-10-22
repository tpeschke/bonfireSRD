import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChapterThirteenAdvancedComponent } from './chapter-thirteen-advanced.component';
import { ChaptersModule } from '../../chapters.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: ChapterThirteenAdvancedComponent }
];


@NgModule({
  declarations: [ChapterThirteenAdvancedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChaptersModule
  ]
})
export class ChapterThirteenAdvancedModule { }
