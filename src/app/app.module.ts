import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubsearchBarComponent } from './githubsearch-bar/githubsearch-bar.component';
import { GithubsearchComponent } from './githubsearch/githubsearch.component';
import { GithubsearchFormComponent } from './githubsearch-form/githubsearch-form.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubsearchBarComponent,
    GithubsearchComponent,
    GithubsearchFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
