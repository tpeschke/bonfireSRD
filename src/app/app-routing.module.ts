import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { SearchComponent } from './search/search.component'
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component'

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'chapter/16', component: HomeComponent},
  {path: 'chapter/0', component: HomeComponent},
  {path: 'chapter/11', loadChildren: './chapters/chapter-twelve/chapter-twelve.module#ChapterTwelveModule' },
  {path: 'chapter/12', loadChildren: './chapters/chapter-thirteen/chapter-thirteen.module#ChapterThirteenModule' },
  {path: 'chapter/10', loadChildren: './chapters/chapter-eleven/chapter-eleven.module#ChapterElevenModule' },
  {path: 'chapter/9', loadChildren: './chapters/chapter-ten/chapter-ten.module#ChapterTenModule' },
  {path: 'chapter/8', loadChildren: './chapters/chapter-nine/chapter-nine.module#ChapterNineModule' },
  {path: 'chapter/13', loadChildren: './chapters/chapter-fourteen/chapter-fourteen.module#ChapterFourteenModule' },
  {path: 'chapter/14', loadChildren: './chapters/chapter-fifteen/chapter-fifteen.module#ChapterFifteenModule' },
  
  {path: 'rules-reference/7', loadChildren: './rules-reference/chapter-seven/rr-seven.module#RrSevenModule' },
  {path: 'rules-reference/6', loadChildren: './rules-reference/chapter-six/rr-six.module#RrSixModule' },
  {path: 'rules-reference/5', loadChildren: './rules-reference/chapter-five/rr-five.module#RrFiveModule' },
  {path: 'rules-reference/4', loadChildren: './rules-reference/chapter-four/rr-four.module#RrFourModule' },
  {path: 'rules-reference/3', loadChildren: './rules-reference/chapter-three/rr-three.module#RrThreeModule' },
  {path: 'rules-reference/2', loadChildren: './rules-reference/chapter-two/rr-two.module#RrTwoModule' },
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
