import { Http, Response} from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

import { User } from '../../medels/user.interface';
import { Repository } from './../../medels/repository.interface';
import { REPOSITORY_LIST } from './../../mocks/repository.mocks';
import { USER_LIST } from './../../mocks/user.mocks';
import { ErrorHandler } from '@angular/core/src/error_handler';


/*
  Generated class for the GithubServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GithubServiceProvider {
  
  private baseUrl: string = "http://api.github.com/users";
  private reposUrl: string = "repos";

  constructor(private http : Http) {
    console.log('Hello GithubServiceProvider Provider');
  }

  getUserInformation(username: string): Observable<User> {
    return this.http.get(`${this.baseUrl}/${username}`)
    // .do(this.logData)
    .map(this.extractData)
    // .do(this.logData)
    .catch(this.handleError)
  }

  getRepositoryInformation(username: string): Observable<Repository[]> {
    return this.http.get(`${this.baseUrl}/${username}/${this.reposUrl}`)
    // .do(this.logData)
    .map(this.extractData)
    // .do(this.logData)
    .catch(this.handleError);
  }
  /*
    Finding the repository from within USER_LIST, returthe Observable value
  */

  mockGetRepositoryInformation (username: string): Observable<Repository[]> {
    return Observable.of(REPOSITORY_LIST.filter( repository => repository.owner.name === username ));
  }

  /*
    fiding user name from within USER_LIST,   And return the result as Observable
  */
  mockGetUserInformation(username: string) : Observable <User> {
    return Observable.of(USER_LIST.filter(user => user.name === username)[0]);
  }

  private handleError(err : Response | any){
    // return Observable.throw(err.json().error || "Server Error");
    // console.log(err.json());
    return [];
  }
  private extractData(response: Response) {
    return response.json();
  }

  private logData(response :Response) {
    console.log(response);
  }
}
