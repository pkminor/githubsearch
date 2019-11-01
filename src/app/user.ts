import {Repository} from './repository';


export class User {

  public repositories:Repository[];
  constructor
  (public id:number;public username:string)
  {this.repositories=[];}
  
}
