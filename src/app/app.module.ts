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

import { QuickNavModule } from './quick-nav/quick-nav.module';

import { ChapterOneComponent } from './chapter-one/chapter-one.component';
import { ChapterTwoComponent } from './chapter-two/chapter-two.component';
import { ChapterThreeComponent } from './chapter-three/chapter-three.component';
import { ChapterFiveComponent } from './chapter-five/chapter-five.component';
import { ChapterSixComponent } from './chapter-six/chapter-six.component';
import { ChapterSevenComponent } from './chapter-seven/chapter-seven.component';
import { ChapterNineComponent } from './chapter-nine/chapter-nine.component';
import { ChapterTenComponent } from './chapter-ten/chapter-ten.component';
import { ChapterFourteenComponent } from './chapter-fourteen/chapter-fourteen.component';
import { ChapterFifteenComponent } from './chapter-fifteen/chapter-fifteen.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SearchComponent,
    FormatSearchPipe,
    ChapterOneComponent,
    ChapterTwoComponent,
    ChapterThreeComponent,
    ChapterFiveComponent,
    ChapterSixComponent,
    ChapterSevenComponent,
    ChapterNineComponent,
    ChapterTenComponent,
    ChapterFourteenComponent,
    ChapterFifteenComponent
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    QuickNavModule,
    EmbedVideo.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
