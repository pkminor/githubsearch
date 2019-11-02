import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-githubsearch-form',
  templateUrl: './githubsearch-form.component.html',
  styleUrls: ['./githubsearch-form.component.css']
})

export class GithubsearchFormComponent implements OnInit {

  searchType:string="";
  searchTerm:string="";
  @Output() searchEvent = new EventEmitter<{type:string;query:string}>();

  constructor() { }

  ngOnInit() {

  }

  searchGithub()
  {
    //alert(this.searchType +" : "+ this.searchTerm)
    if(this.searchType && this.searchTerm)
       this.searchEvent.emit({type:this.searchType,query:this.searchTerm});
    else alert("no search");
  }

}
