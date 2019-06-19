import { Injectable } from '@angular/core';
import { Http, Headers} from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Register } from '../../models/register';
import { Login } from '../../models/login';
import { UserAndVideoListContainer } from '../../models/userAndVideoListContainer';
import { Router } from '@angular/router';
import { Update } from '../../models/update';
import { LoginService } from '../../services/login/login.service';
import { User } from '../../models/user';


@Injectable()
export class DataProviderService {

  private backendUserUrl = 'http://localhost:8080/videosharebe/user/';
  private headers = new Headers({'Content-Type': 'application/json'});
  public userAndVideoListContainer: UserAndVideoListContainer;

  constructor(
    private http: Http,
    private loginService: LoginService
  ) { }

    register(register: Register): Promise<Register> {
      console.log('In register function');
      console.log(JSON.stringify(register));
      return this.http
        .post(this.backendUserUrl, JSON.stringify(register), {headers: this.headers})
        .toPromise()
        .then(response => response.json() as Register)
        .catch(this.handleError);
    }

    // Returns promise of UserAndVideoListContainer because
    // currently UserAndVideoListContainer is only an array
    // of Register objects which would be identical to a User object
    // hence the register objects are used instead.
    login(login: Login): Promise<UserAndVideoListContainer> {
      console.log('In login function');
      this.loginService.setUserLoggedIn();
      return this.http
        .post(this.backendUserUrl + 'login/', JSON.stringify(login), {headers: this.headers})
        .toPromise()
        .then(response => {
          console.log(response.json() as UserAndVideoListContainer);
          this.userAndVideoListContainer = response.json() as UserAndVideoListContainer;
          return response.json() as UserAndVideoListContainer;}
        )
        .catch(this.handleError);
    }

    delete(username: String): Promise<Boolean>{
      console.log('In delete function');
      return this.http
        .delete(this.backendUserUrl + username)
        .toPromise()
        .then(response => response)
        .catch(this.handleError);
    }

    update(user: User, username: string): Promise<Register> {
      return this.http
        .put(this.backendUserUrl + username, user)
        .toPromise()
        .then(response => response.json())
        .catch(this.handleError);
    }

    getUserList(): Promise<UserAndVideoListContainer> {
      return this.http
        .get(this.backendUserUrl)
        .toPromise()
        .then(response => response.json() as UserAndVideoListContainer)
        .catch(this.handleError);
    }
    private handleError(error: any): Promise<any> {
      console.error('An error occured', error);
      return Promise.reject(error.message || error);
    }
}
