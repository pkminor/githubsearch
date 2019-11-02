import {Repository} from './repository';

export class User {

  public repositories:Repository[];
  public id:number;
  public username:string;
  public avatar:string;
  public repos:number;
  public followers:number;
  public following:number;
  public created:string;
  public updated:string;

  constructor(){ this.repositories=[]; }

}
