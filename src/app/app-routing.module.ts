import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ChapterComponent } from './chapter/chapter.component';
import { ChapteroneComponent } from './chapter-one/chapterone/chapterone.component'
import { ChapterTwoComponent } from './chapter-two/chapterTwo/chapter-two.component'
import { ChapterThreeComponent } from './chapter-three/chapter-three/chapter-three.component'
import { ChapterFourComponent } from './chapter-four/main/chapter-four.component'
import { ChapterFiveComponent } from './chapter-five/main/chapter-five.component'
import { ChapterSixComponent } from './chapter-six/main/chapter-six.component'
import { ChapterSevenComponent } from './chapter-seven/main/chapter-seven.component'
import { ChapterEightComponent } from './chapter-eight/main/chapter-eight.component'
import { ChapterNineComponent } from './chapter-nine/main/chapter-nine.component'

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'chapter/0', component: HomeComponent},
  {path: 'chapter/1', component: ChapteroneComponent},
  {path: 'chapter/2', component: ChapterTwoComponent},
  {path: 'chapter/3', component: ChapterThreeComponent},
  {path: 'chapter/4', component: ChapterFourComponent},
  {path: 'chapter/5', component: ChapterFiveComponent},
  {path: 'chapter/6', component: ChapterSixComponent},
  {path: 'chapter/7', component: ChapterSevenComponent},
  {path: 'chapter/8', component: ChapterEightComponent},
  {path: 'chapter/9', component: ChapterNineComponent},
  {path: 'chapter/16', component: HomeComponent},
  {path: 'chapter/:id', component: ChapterComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
