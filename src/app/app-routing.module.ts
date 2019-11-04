import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GithubsearchComponent } from './githubsearch/githubsearch.component';
import { GithubsearchDetailsComponent } from './githubsearch-details/githubsearch-details.component';

const routes: Routes = [
  {path:'search',component:GithubsearchDetailsComponent},
  {path:'details/:user',component:GithubsearchDetailsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
