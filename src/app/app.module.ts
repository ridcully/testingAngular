import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import {AngularFontAwesomeModule} from 'angular-font-awesome';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {SearchComponent} from './search/search.component';
import {PlayerComponent} from './player/player.component';
import {SearchboxComponent} from './search/searchbox/searchbox.component';
import {SearchresultComponent} from './search/searchresult/searchresult.component';
import {SearchResultsService} from './searchResults.service';
import {OrderBy} from './search/searchbox/orderBy.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    PlayerComponent,
    SearchboxComponent,
    SearchresultComponent,
    OrderBy
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AngularFontAwesomeModule,
    AppRoutingModule
  ],
  providers: [SearchResultsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
