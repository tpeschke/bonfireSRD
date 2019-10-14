import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChapterThreeAdvancedComponent } from './chapter-three-advanced.component';
import { ChaptersModule } from '../../chapters.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: ChapterThreeAdvancedComponent }
];

@NgModule({
  declarations: [ChapterThreeAdvancedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChaptersModule
  ]
})
export class ChapterThreeAdvancedModule { }
