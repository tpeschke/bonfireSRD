import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
// import { EmbedVideo } from 'ngx-embed-video';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { LogonComponent } from './logon/logon.component';
import { FormatSearchPipe } from './format-search.pipe';

import { QuickNavModule } from './quick-nav/quick-nav.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SearchComponent,
    PrivacyPolicyComponent,
    LogonComponent,
    SearchComponent,
    FormatSearchPipe
  ],
  imports: [
    AppRoutingModule,
    HttpClientModule,
    BrowserModule,
    QuickNavModule,
    // EmbedVideo.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
