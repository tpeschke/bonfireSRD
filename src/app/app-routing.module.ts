import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

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
import { ChapterOneModule } from './chapter-one/chapter-one.module'
import { ChapterSixModule } from './chapter-six/chapter-six.module'
import { ChapterNineModule } from './chapter-nine/chapter-nine.module'
import { ChapterFourteenModule } from './chapter-fourteen/chapter-fourteen.module'
import { ChapterFifteenModule } from './chapter-fifteen/chapter-fifteen.module'

import { SelectivePreloadingStrategyService } from './selective-preloading.service'

import { SearchComponent } from './search/search.component'
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component'

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
  {path: 'chapter/1', loadChildren: () => ChapterOneModule, data: { preload: true } },
  {path: 'chapter/6', loadChildren: () => ChapterSixModule, data: { preload: true } },
  {path: 'chapter/9', loadChildren: () => ChapterNineModule, data: { preload: true } },
  {path: 'chapter/14', loadChildren: () => ChapterFourteenModule, data: { preload: true } },
  {path: 'chapter/15', loadChildren: () => ChapterFifteenModule, data: { preload: true } },
  {path: 'search', component: SearchComponent},
  {path: 'privacypolicy', component: PrivacyPolicyComponent},
]

@NgModule({
  imports: [ RouterModule.forRoot(routes, {preloadingStrategy: SelectivePreloadingStrategyService}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
