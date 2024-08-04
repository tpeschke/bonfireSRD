import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';

import { SearchComponent } from './search/search.component'
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component'
import { AboutComponent } from './about/about.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'chapter/16', component: HomeComponent},
  {path: 'chapter/0', component: HomeComponent},
  
  {path: 'character-creation/8', loadChildren: './character-creation/chapter-seven/cc-seven.module#CcSevenModule' },
  {path: 'character-creation/7', loadChildren: './character-creation/chapter-six/cc-six.module#CcSixModule' },
  {path: 'character-creation/6', loadChildren: './character-creation/chapter-five/cc-five.module#CcFiveModule' },
  {path: 'character-creation/5', loadChildren: './character-creation/chapter-four/cc-four.module#CcFourModule' },
  {path: 'character-creation/4', loadChildren: './character-creation/chapter-three/cc-three.module#CcThreeModule' },
  {path: 'character-creation/3', loadChildren: './character-creation/chapter-two/cc-two.module#CcTwoModule' },
  {path: 'character-creation/2', loadChildren: './character-creation/chapter-one/cc-one.module#CcOneModule' },
  {path: 'character-creation/1', loadChildren: './character-creation/chapter-zero/cc-zero.module#CcZeroModule' },
  
  {path: 'rules-reference/7', loadChildren: './rules-reference/chapter-seven/rr-seven.module#RrSevenModule' },
  {path: 'rules-reference/6', loadChildren: './rules-reference/chapter-six/rr-six.module#RrSixModule' },
  {path: 'rules-reference/5', loadChildren: './rules-reference/chapter-five/rr-five.module#RrFiveModule' },
  {path: 'rules-reference/4', loadChildren: './rules-reference/chapter-four/rr-four.module#RrFourModule' },
  {path: 'rules-reference/3', loadChildren: './rules-reference/chapter-three/rr-three.module#RrThreeModule' },
  {path: 'rules-reference/2', loadChildren: './rules-reference/chapter-two/rr-two.module#RrTwoModule' },
  {path: 'rules-reference/1', loadChildren: './rules-reference/chapter-one/rr-one.module#RrOneModule' },

  {path: 'chapter/15', redirectTo: 'character-creation/8' },
  {path: 'chapter/14', redirectTo: 'character-creation/7' },
  {path: 'chapter/13', redirectTo: 'character-creation/6' },
  {path: 'chapter/12', redirectTo: 'character-creation/5' },
  {path: 'chapter/11', redirectTo: 'character-creation/4' },
  {path: 'chapter/10', redirectTo: 'character-creation/3' },
  {path: 'chapter/9', redirectTo: 'character-creation/2' },
  {path: 'chapter/8', redirectTo: 'character-creation/1' },
  {path: 'chapter/7', redirectTo: 'rules-reference/7' },
  {path: 'chapter/6', redirectTo: 'rules-reference/6' },
  {path: 'chapter/5', redirectTo: 'rules-reference/5' },
  {path: 'chapter/4', redirectTo: 'rules-reference/4' },
  {path: 'chapter/3', redirectTo: 'rules-reference/3' },
  {path: 'chapter/2', redirectTo: 'rules-reference/2' },
  {path: 'chapter/1', redirectTo: 'rules-reference/1' },

  {path: 'search', component: SearchComponent},
  {path: 'privacypolicy', component: PrivacyPolicyComponent},
  {path: 'about', component: AboutComponent},
  {path: '**', redirectTo: ''},
]

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }
