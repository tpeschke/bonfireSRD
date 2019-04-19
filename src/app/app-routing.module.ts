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
  {path: 'chapter/0', component: HomeComponent},
  {path: 'chapter/1', component: ChapteroneComponent},
  {path: 'chapter/2', component: ChapterTwoComponent},
  {path: 'chapter/3', component: ChapterThreeComponent},
  {path: 'chapter/4', component: ChapterFourComponent},
  {path: 'chapter/16', component: HomeComponent},
  {path: 'chapter/:id', component: ChapterComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
