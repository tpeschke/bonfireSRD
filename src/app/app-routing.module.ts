import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { SearchComponent } from './search/search.component'
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component'

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'chapter/16', component: HomeComponent},
  {path: 'chapter/0', component: HomeComponent},
  {path: 'chapter/4', loadChildren: './chapters/chapter-four/chapter-four.module#ChapterFourModule' },
  {path: 'chapter/11', loadChildren: './chapters/chapter-twelve/chapter-twelve.module#ChapterTwelveModule' },
  {path: 'chapter/12', loadChildren: './chapters/chapter-thirteen/chapter-thirteen.module#ChapterThirteenModule' },
  {path: 'chapter/10', loadChildren: './chapters/chapter-eleven/chapter-eleven.module#ChapterElevenModule' },
  {path: 'chapter/7', loadChildren: './chapters/chapter-eight/chapter-eight.module#ChapterEightModule' },
  {path: 'chapter/5', loadChildren: './chapters/chapter-five/chapter-five.module#ChapterFiveModule' },
  {path: 'chapter/3', loadChildren: './chapters/chapter-three/chapter-three.module#ChapterThreeModule' },
  {path: 'chapter/2', loadChildren: './chapters/chapter-two/chapter-two.module#ChapterTwoModule' },
  {path: 'chapter/9', loadChildren: './chapters/chapter-ten/chapter-ten.module#ChapterTenModule' },
  {path: 'chapter/6', loadChildren: './chapters/chapter-six/chapter-six.module#ChapterSixModule' },
  {path: 'chapter/8', loadChildren: './chapters/chapter-nine/chapter-nine.module#ChapterNineModule' },
  {path: 'chapter/13', loadChildren: './chapters/chapter-fourteen/chapter-fourteen.module#ChapterFourteenModule' },
  {path: 'chapter/14', loadChildren: './chapters/chapter-fifteen/chapter-fifteen.module#ChapterFifteenModule' },

  {path: 'rules-reference/1', loadChildren: './rules-reference/chapter-one/rr-one.module#RrOneModule' },
  {path: 'search', component: SearchComponent},
  {path: 'privacypolicy', component: PrivacyPolicyComponent},
  {path: '**', redirectTo: ''},
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
