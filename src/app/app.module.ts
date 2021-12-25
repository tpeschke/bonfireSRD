import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SearchComponent } from './search/search.component';
import { PrivacyPolicyComponent } from './privacy-policy/privacy-policy.component';
import { LogonComponent } from './logon/logon.component';
import { FormatSearchPipe } from './format-search.pipe';

import { BookmarkingModule } from './bookmarking/Bookmarking.module';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    SearchComponent,
    PrivacyPolicyComponent,
    LogonComponent,
    FormatSearchPipe
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    BookmarkingModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot({preventDuplicates: true}),
    AppRoutingModule
  ],
  providers: [  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
