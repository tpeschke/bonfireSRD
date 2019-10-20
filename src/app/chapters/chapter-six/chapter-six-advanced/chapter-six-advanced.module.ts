import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChapterSixAdvancedComponent } from './chapter-six-advanced.component';
import { ChaptersModule } from '../../chapters.module';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  { path: '', component: ChapterSixAdvancedComponent }
];

@NgModule({
  declarations: [ChapterSixAdvancedComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ChaptersModule
  ]
})
export class ChapterSixAdvancedModule { }
