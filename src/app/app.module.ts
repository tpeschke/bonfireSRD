import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { EmbedVideo } from 'ngx-embed-video';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { FormatSearchPipe } from './format-search.pipe';
import { QuickNavComponent } from './quick-nav/quick-nav.component';

import { ChapterOneComponent } from './chapter-one/chapter-one.component';
import { ChapterTwoComponent } from './chapter-two/chapter-two.component';
import { ChapterThreeComponent } from './chapter-three/chapter-three.component';
import { ChapterFourComponent } from './chapter-four/chapter-four.component';
import { ChapterFiveComponent } from './chapter-five/chapter-five.component';
import { ChapterSixComponent } from './chapter-six/chapter-six.component';
import { ChapterSevenComponent } from './chapter-seven/chapter-seven.component';
import { ChapterEightComponent } from './chapter-eight/chapter-eight.component';
import { ChapterNineComponent } from './chapter-nine/chapter-nine.component';
import { ChapterTenComponent } from './chapter-ten/chapter-ten.component';
import { ChapterElevenComponent } from './chapter-eleven/chapter-eleven.component';
import { ChapterTwelveComponent } from './chapter-twelve/chapter-twelve.component';
import { ChapterThirteenComponent } from './chapter-thirteen/chapter-thirteen.component';
import { ChapterFourteenComponent } from './chapter-fourteen/chapter-fourteen.component';
import { ChapterFifteenComponent } from './chapter-fifteen/chapter-fifteen.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    QuickNavComponent,
    SearchComponent,
    FormatSearchPipe,
    ChapterOneComponent,
    ChapterTwoComponent,
    ChapterThreeComponent,
    ChapterFourComponent,
    ChapterFiveComponent,
    ChapterSixComponent,
    ChapterSevenComponent,
    ChapterEightComponent,
    ChapterNineComponent,
    ChapterTenComponent,
    ChapterElevenComponent,
    ChapterTwelveComponent,
    ChapterThirteenComponent,
    ChapterFourteenComponent,
    ChapterFifteenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EmbedVideo.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
