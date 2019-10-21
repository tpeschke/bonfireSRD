import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChapterTenAdvancedComponent } from './chapter-ten-advanced.component';
import { ChaptersModule } from '../../chapters.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: ChapterTenAdvancedComponent }
];


@NgModule({
  declarations: [ChapterTenAdvancedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChaptersModule
  ]
})
export class ChapterTenAdvancedModule { }
