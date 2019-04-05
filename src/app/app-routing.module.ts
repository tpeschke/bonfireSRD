import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ChapterComponent } from './chapter/chapter.component';
import { ChapteroneComponent } from './chapter-one/chapterone/chapterone.component'
import { ChapterTwoComponent } from './chapter-two/chapterTwo/chapter-two.component'
import { ChapterThreeComponent } from './chapter-three/chapter-three/chapter-three.component'
import { ChapterFourComponent } from './chapter-four/main/chapter-four.component'

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'chapter/c0', component: HomeComponent},
  {path: 'chapter/c1', component: ChapteroneComponent},
  {path: 'chapter/c2', component: ChapterTwoComponent},
  {path: 'chapter/c3', component: ChapterThreeComponent},
  {path: 'chapter/c4', component: ChapterFourComponent},
  {path: 'chapter/c16', component: HomeComponent},
  {path: 'chapter/:id', component: ChapterComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
