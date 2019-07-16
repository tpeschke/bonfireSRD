import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ChapterOneComponent } from './chapter-one/chapter-one.component';

// import { ChapterTwoComponent } from './chapter-two/chapterTwo/chapter-two.component'
// import { ChapterThreeComponent } from './chapter-three/chapter-three/chapter-three.component'
// import { ChapterFourComponent } from './chapter-four/main/chapter-four.component'
// import { ChapterFiveComponent } from './chapter-five/main/chapter-five.component'
// import { ChapterSixComponent } from './chapter-six/main/chapter-six.component'
// import { ChapterSevenComponent } from './chapter-seven/main/chapter-seven.component'
// import { ChapterEightComponent } from './chapter-eight/main/chapter-eight.component'
// import { ChapterNineComponent } from './chapter-nine/main/chapter-nine.component'
// import { ChapterTenComponent } from './chapter-ten/main/chapter-ten.component'
// import { ChapterElevenComponent } from './chapter-eleven/main/chapter-eleven.component'
// import { ChapterTwelveComponent } from './chapter-twelve/main/chapter-twelve.component'
// import { ChapterThirteenComponent } from './chapter-thirteen/main/chapter-thirteen.component'

import { SearchComponent } from './search/search.component'

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'search', component: SearchComponent},
  {path: 'chapter/0', component: HomeComponent},
  {path: 'chapter/1', component: ChapterOneComponent},
  // {path: 'chapter/2', component: ChapterTwoComponent},
  // {path: 'chapter/3', component: ChapterThreeComponent},
  // {path: 'chapter/4', component: ChapterFourComponent},
  // {path: 'chapter/5', component: ChapterFiveComponent},
  // {path: 'chapter/6', component: ChapterSixComponent},
  // {path: 'chapter/7', component: ChapterSevenComponent},
  // {path: 'chapter/8', component: ChapterEightComponent},
  // {path: 'chapter/9', component: ChapterNineComponent},
  // {path: 'chapter/10', component: ChapterTenComponent},
  // {path: 'chapter/11', component: ChapterElevenComponent},
  // {path: 'chapter/12', component: ChapterTwelveComponent},
  // {path: 'chapter/13', component: ChapterThirteenComponent},
  // {path: 'chapter/14', component: ChapterThirteenComponent},
  // {path: 'chapter/15', component: ChapterThirteenComponent},
  {path: 'chapter/16', component: HomeComponent}
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
