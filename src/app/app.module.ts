import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubsearchBarComponent } from './githubsearch-bar/githubsearch-bar.component';
import { GithubsearchComponent } from './githubsearch/githubsearch.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubsearchBarComponent,
    GithubsearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
