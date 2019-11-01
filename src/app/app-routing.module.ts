import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GithubsearchComponent } from './githubsearch/githubsearch.component';
const routes: Routes = [
  {path:'**',component:GithubsearchComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
