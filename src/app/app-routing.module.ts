import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { ChapterOneComponent } from './chapter-one/chapter-one.component';
import { ChapterSixComponent } from './chapter-six/chapter-six.component'
import { ChapterNineComponent } from './chapter-nine/chapter-nine.component'
import { ChapterTenComponent } from './chapter-ten/chapter-ten.component'
import { ChapterFourteenComponent } from './chapter-fourteen/chapter-fourteen.component'
import { ChapterFifteenComponent } from './chapter-fifteen/chapter-fifteen.component'

import { ChapterFourModule } from './chapter-four/chapter-four.module'
import { ChapterTwelveModule } from './chapter-twelve/chapter-twelve.module'
import { ChapterElevenModule } from './chapter-eleven/chapter-eleven.module'
import { ChapterThirteenModule } from './chapter-thirteen/chapter-thirteen.module'
import { ChapterEightModule } from './chapter-eight/chapter-eight.module'
import { ChapterFiveModule } from './chapter-five/chapter-five.module'
import { ChapterSevenModule } from './chapter-seven/chapter-seven.module'
import { ChapterThreeModule } from './chapter-three/chapter-three.module'
import { ChapterTwoModule } from './chapter-two/chapter-two.module'
import { ChapterTenModule } from './chapter-ten/chapter-ten.module'

import { SelectivePreloadingStrategyService } from './selective-preloading.service'

import { SearchComponent } from './search/search.component'

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'chapter/16', component: HomeComponent},
  {path: 'chapter/0', component: HomeComponent},
  {path: 'chapter/4', loadChildren: () => ChapterFourModule, data: { preload: true } },
  {path: 'chapter/12', loadChildren: () => ChapterTwelveModule, data: { preload: true } },
  {path: 'chapter/13', loadChildren: () => ChapterThirteenModule, data: { preload: true } },
  {path: 'chapter/11', loadChildren: () => ChapterElevenModule, data: { preload: true } },
  {path: 'chapter/8', loadChildren: () => ChapterEightModule, data: { preload: true } },
  {path: 'chapter/5', loadChildren: () => ChapterFiveModule, data: { preload: true } },
  {path: 'chapter/7', loadChildren: () => ChapterSevenModule, data: { preload: true } },
  {path: 'chapter/3', loadChildren: () => ChapterThreeModule, data: { preload: true } },
  {path: 'chapter/2', loadChildren: () => ChapterTwoModule, data: { preload: true } },
  {path: 'chapter/10', loadChildren: () => ChapterTenModule, data: { preload: true } },
  {path: 'chapter/1', component: ChapterOneComponent},
  {path: 'chapter/6', component: ChapterSixComponent},
  {path: 'chapter/9', component: ChapterNineComponent},
  {path: 'chapter/14', component: ChapterFourteenComponent},
  {path: 'chapter/15', component: ChapterFifteenComponent},
  {path: 'search', component: SearchComponent},
]

@NgModule({
  imports: [ RouterModule.forRoot(routes, {preloadingStrategy: SelectivePreloadingStrategyService}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
