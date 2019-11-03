import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubsearchBarComponent } from './githubsearch-bar/githubsearch-bar.component';
import { GithubsearchComponent } from './githubsearch/githubsearch.component';
import { GithubsearchFormComponent } from './githubsearch-form/githubsearch-form.component';
import { GithubsearchProfileComponent } from './githubsearch-profile/githubsearch-profile.component';
import { GithubsearchDetailsComponent } from './githubsearch-details/githubsearch-details.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubsearchBarComponent,
    GithubsearchComponent,
    GithubsearchFormComponent,
    GithubsearchProfileComponent,
    GithubsearchDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
