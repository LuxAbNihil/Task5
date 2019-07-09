import { Injectable } from '@angular/core';
import { Login } from '../../../models/login';
import { UserAndVideoListContainer } from '../../../models/userAndVideoListContainer';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class LoginService {

  private isUserLoggedIn: boolean;
  private currentUser: String;

  private backendUserUrl = 'http://localhost:8080/videosharebe/user/';
  private headers = new HttpHeaders({'Content-Type': 'application/json'});
  public userAndVideoListContainer: UserAndVideoListContainer;

  constructor(

    private http: HttpClient
  ) {
    this.isUserLoggedIn = false;
  }

  setUserLoggedIn(userLoggedOn: boolean) {
    this.isUserLoggedIn = userLoggedOn;
  }

  getUserLoggedIn(): boolean {
    return this.isUserLoggedIn;
  }

  setCurrentUser(username: String) {
    this.currentUser = username;
  }

  getCurrentUser(): String {
    return this.currentUser;
  }

  login(login: Login): Observable<String> {
    const body = JSON.stringify(login);
    const response = this.http
        .post<String>(this.backendUserUrl + 'login/', body, {headers: this.headers});
    return response;
  }


}
