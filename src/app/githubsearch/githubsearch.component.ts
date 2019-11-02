import { Component, OnInit } from '@angular/core';
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

 user:User;
 repositories:Repository[]=[];
 searchType:string="home";

  constructor(private searchservice:GithubsearchService) {
  }

  ngOnInit() {
    this.searchGithub({type:"repos",query:"pkminor"});
    this.searchGithub({type:"user",query:"pkminor"});
  }

  searchGithub(search:any){

    this.searchType=search.type;

    if(search.type=="user"){

      this.searchservice.getUser(search.query).then(
        ()=>{this.user=this.searchservice.user;  },
        (error)=>{}
      );


    }

    if(search.type=="repos"){

      this.searchservice.getUserRepositories(search.query).then(
        ()=>{this.repositories=this.searchservice.repositories;},
        (error)=>{}
      );


    }


  }
}
