import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChapterTwelveAdvancedComponent } from './chapter-twelve-advanced.component';
import { ChaptersModule } from '../../chapters.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: ChapterTwelveAdvancedComponent }
];

@NgModule({
  declarations: [ChapterTwelveAdvancedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChaptersModule
  ]
})
export class ChapterTwelveAdvancedModule { }
