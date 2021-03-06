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
import { AudioElementComponent } from './player/audio-element/audio-element.component';
import { ShareComponent } from './player/share/share.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    PlayerComponent,
    SearchboxComponent,
    SearchresultComponent,
    AudioElementComponent,
    ShareComponent,
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
