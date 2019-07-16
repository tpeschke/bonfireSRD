import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { EmbedVideo } from 'ngx-embed-video';

import { DisplayModule } from './display/display.module';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SafeHtmlPipe } from './safe-html.pipe';
import { SearchComponent } from './search/search.component';
import { FormatSearchPipe } from './format-search.pipe';

import { ChapterOneComponent } from './chapter-one/chapter-one.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SafeHtmlPipe,
    SearchComponent,
    FormatSearchPipe,
    ChapterOneComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    DisplayModule,
    EmbedVideo.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
