import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { GithubsearchService } from '../githubsearch-service/githubsearch.service';
import {User} from '../user';
import {Repository} from '../repository';
import {environment} from '../../environments/environment';


@Component({
  selector: 'app-githubsearch',
  templateUrl: './githubsearch.component.html',
  styleUrls: ['./githubsearch.component.css']
})
export class GithubsearchComponent implements OnInit {

 native:User;
 user:User;
 repositories:Repository[]=[];
 searchType:string="home";

  constructor(private router:Router, private searchservice:GithubsearchService) {
  }

  ngOnInit() {

    this.searchGithub({type:"user",query:"pkminor"});
    this.searchGithub({type:"repos",query:"pkminor"});
  }

  viewRepositories(username:string){
    this.router.navigate(['/details',username]);
  }

  searchGithub(search:any){

    this.searchType=search.type;

    //opted to fetch both user and repositories to ensure profile card and main content are uniform
    if(true){

      this.searchservice.getUser(search.query).then(
        ()=>{this.user=this.searchservice.user;  },
        (error)=>{}
      );
    }

    if(true){

      this.searchservice.getUserRepositories(search.query).then(
        ()=>{ //this.repositories=this.searchservice.repositories;
          this.repositories = this.searchservice.rs;
        },
        (error)=>{}
      );
    }

  }

}
