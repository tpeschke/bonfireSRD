import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChapterNineAdvancedComponent } from './chapter-nine-advanced.component';
import { ChaptersModule } from '../../chapters.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: ChapterNineAdvancedComponent }
];

@NgModule({
  declarations: [ChapterNineAdvancedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChaptersModule
  ]
})
export class ChapterNineAdvancedModule { }
