import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { SelectivePreloadingStrategyService } from './selective-preloading.service'

import { SearchComponent } from './search/search.component'
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component'

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'chapter/16', component: HomeComponent},
  {path: 'chapter/0', component: HomeComponent},
  {path: 'chapter/4', loadChildren: './chapters/chapter-four/chapter-four.module#ChapterFourModule', data: { preload: true } },
  {path: 'chapter/12', loadChildren: './chapters/chapter-twelve/chapter-twelve.module', data: { preload: true } },
  {path: 'chapter/13', loadChildren: './chapters/chapter-thirteen/chapter-thirteen.module', data: { preload: true } },
  {path: 'chapter/11', loadChildren: './chapters/chapter-eleven/chapter-eleven.module', data: { preload: true } },
  {path: 'chapter/8', loadChildren: './chapters/chapter-eight/chapter-eight.module', data: { preload: true } },
  {path: 'chapter/5', loadChildren: './chapters/chapter-five/chapter-five.module', data: { preload: true } },
  {path: 'chapter/7', loadChildren: './chapters/chapter-seven/chapter-seven.module', data: { preload: true } },
  {path: 'chapter/3', loadChildren: './chapters/chapter-three/chapter-three.module', data: { preload: true } },
  {path: 'chapter/2', loadChildren: './chapters/chapter-two/chapter-two.module', data: { preload: true } },
  {path: 'chapter/10', loadChildren: './chapters/chapter-ten/chapter-ten.module', data: { preload: true } },
  {path: 'chapter/1', loadChildren: './chapters/chapter-one/chapter-one.module', data: { preload: true } },
  {path: 'chapter/6', loadChildren: './chapters/chapter-six/chapter-six.module', data: { preload: true } },
  {path: 'chapter/9', loadChildren: './chapters/chapter-nine/chapter-nine.module', data: { preload: true } },
  {path: 'chapter/14', loadChildren: './chapters/chapter-fourteen/chapter-fourteen.module', data: { preload: true } },
  {path: 'chapter/15', loadChildren: './chapters/chapter-fifteen/chapter-fifteen.module', data: { preload: true } },
  {path: 'search', component: SearchComponent},
  {path: 'privacypolicy', component: PrivacyPolicyComponent},
]

@NgModule({
  imports: [ RouterModule.forRoot(routes, {preloadingStrategy: SelectivePreloadingStrategyService}) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
