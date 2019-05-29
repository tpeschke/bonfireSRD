import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { EmbedVideo } from 'ngx-embed-video';

import { ChapterOneModule } from './chapter-one/chapter-one.module';
import { ChapterTwoModule } from './chapter-two/chapter-two.module';
import { ChapterThreeModule } from './chapter-three/chapter-three.module';
import { ChapterFourModule } from './chapter-four/chapter-four.module';
import { ChapterFiveModule } from './chapter-five/chapter-five.module';
import { ChapterSixModule } from './chapter-six/chapter-six.module';
import { ChapterSevenModule } from './chapter-seven/chapter-seven.module';
import { ChapterEightModule } from './chapter-eight/chapter-eight.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { ChapterComponent } from './chapter/chapter.component';
import { SafeHtmlPipe } from './safe-html.pipe';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ChapterComponent,
    SafeHtmlPipe,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChapterOneModule,
    ChapterTwoModule,
    ChapterThreeModule,
    ChapterFourModule,
    ChapterFiveModule,
    ChapterSixModule,
    ChapterSevenModule,
    ChapterEightModule,
    EmbedVideo.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
