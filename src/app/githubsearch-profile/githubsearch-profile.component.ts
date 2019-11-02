import { Component, OnInit, Input } from '@angular/core';
import {User} from '../user';

@Component({
  selector: 'app-githubsearch-profile',
  templateUrl: './githubsearch-profile.component.html',
  styleUrls: ['./githubsearch-profile.component.css']
})
export class GithubsearchProfileComponent implements OnInit {

  @Input() user:User;
  constructor() { }

  ngOnInit() {
  }

}
