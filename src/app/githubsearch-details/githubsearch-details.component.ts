import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap } from '@angular/router';

import {Repository} from '../repository';
import { GithubsearchService } from '../githubsearch-service/githubsearch.service';

@Component({
  selector: 'app-githubsearch-details',
  templateUrl: './githubsearch-details.component.html',
  styleUrls: ['./githubsearch-details.component.css']
})
export class GithubsearchDetailsComponent implements OnInit {

 repositories:Repository[]=[];
  constructor(private route:ActivatedRoute,private searchservice:GithubsearchService) {}

  ngOnInit() {

    let username = this.route.snapshot.paramMap.get('user');
    this.searchservice.getUserRepositories(username).then(
      ()=>{this.repositories=this.searchservice.repositories;},
      (error)=>{}
    );
  }

}
