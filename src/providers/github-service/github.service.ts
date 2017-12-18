// import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';


import { User } from '../../medels/user.interface';
import { Repository } from './../../medels/repository.interface';
import { REPOSITORY_LIST } from './../../mocks/repository.mocks';
import { USER_LIST } from './../../mocks/user.mocks';


/*
  Generated class for the GithubServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GithubServiceProvider {

  constructor() {
    console.log('Hello GithubServiceProvider Provider');
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
}
