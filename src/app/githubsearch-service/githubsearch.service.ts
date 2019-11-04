import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../environments/environment';
import { User } from '../user';
import {Repository} from '../repository';

@Injectable({
  providedIn: 'root'
})
export class GithubsearchService {

  repositories:Repository[]=[];
  user:User;
  rs:any;
  constructor(private http:HttpClient) { }

  getUser(user:string){

    let url="https://api.github.com/users/"+user+"?access_token=" + environment.githubKey;

    let promise = new Promise( (resolve,reject)=>{
      this.http.get(url).toPromise().then(
        (results)=>{
          this.user=new User();
          this.user.id=results["id"];
          this.user.username=results["login"];
          this.user.avatar=results["avatar_url"];
          this.user.url=results["url"];
          this.user.repos=results["public_repos"];
          this.user.followers=results["followers"];
          this.user.following=results["following"];
          this.user.created=results["created_at"];
          this.user.updated=results["updated_at"];
          resolve();
        },
        (error)=>{
          reject();
        }
      );
    }

    );

    return promise;

  }// end getUser

  getUserRepositories(user){
    this.repositories=[];
    let urlink="https://api.github.com/users/"+user+"/repos?access_token=" + environment.githubKey;

    //interface ApiResponse{data:[{id:number;name:string;html_url:string}]}
    let promise = new Promise( (resolve,reject)=>{
      this.http.get(urlink).toPromise().then(
        (results)=>{
          //if(!results) results=[{"id":0,"name":"empty","html_url":"empty"}];
          //results.forEach((repo)=>{ //let repo=results.data; //
          //for(let i=0; i<results.length;i++){
          //  let repo =  results[i];
            //let rp= new Repository(repo["id"],repo["name"], repo["html_url"]);
            //this.repositories.push(rp);
            //console.log(results);
            this.rs=results;
         //});
     //}

          resolve();
        },

        (error)=>{
          reject();
        }
      );
    }

    );

    return promise;
  } //end getUserRepositories
}
