import { Injectable } from '@angular/core';;
import { HttpClient, HttpHeaders } from '@angular/common/http';

import 'rxjs/add/operator/toPromise';

import { Register } from '../../../models/register';
import { UserAndVideoListContainer } from '../../../models/userAndVideoListContainer';
import { LoginService } from '../login/login.service';
import { User } from '../../../models/user';
import { Observable } from 'rxjs/Observable';
import { LocalStorageService } from '../local-storage/local-storage.service';
import { Headers } from '@angular/http';


@Injectable()
export class DataProviderService {

  private backendUserUrl = 'http://localhost:8080/videosharebe/user/';
  private headers = new Headers({'Content-Type': 'application/json'});
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(
    private httpClient: HttpClient,
    private loginService: LoginService,
    private localStorageService: LocalStorageService
  ) { }

    register(register: Register): Promise<Register> {
      console.log('In register function');
      console.log(JSON.stringify(register));
      return this.httpClient
        .post(this.backendUserUrl, JSON.stringify(register), {headers: this.httpHeaders})
        .toPromise()
        .then(response => response as Register)
        .catch(this.handleError);
    }

    delete(username: String): Promise<Boolean> {
      console.log('In delete function');
      return this.httpClient
        .delete(this.backendUserUrl + username)
        .toPromise()
        .then(response => response)
        .catch(this.handleError);
    }

    update(user: User, username: string): Promise<Register> {
      return this.httpClient
        .put(this.backendUserUrl + username, user)
        .toPromise()
        .then(response => response)
        .catch(this.handleError);
    }

    getUserList(): Promise<UserAndVideoListContainer> {
      return this.httpClient
        .get(this.backendUserUrl)
        .toPromise()
        .then(response => response as UserAndVideoListContainer)
        .catch(this.handleError);
    }

    getUserAndVideoListContainer(token: String, username: any): Observable<UserAndVideoListContainer> {
      return this.httpClient
        .post<UserAndVideoListContainer>(this.backendUserUrl + 'getUserAndVideoListContainer/' + username + '/',
        token, {headers: this.httpHeaders});
    }

    private handleError(error: any): Promise<any> {
      console.error('An error occured', error);
      return Promise.reject(error.message || error);
    }


}
