import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { PasswordReset } from '../../../models/passwordReset';

@Injectable()
export class ResetPasswordService {

  private backendUserUrl = 'http://localhost:8080/videosharebe/user/resetPassword/';
  private httpHeaders =  new HttpHeaders({'Content-Type': 'application/json'});

  constructor(
    private http: HttpClient
  ) { }

  submit(passwordReset: PasswordReset) {
    const body = JSON.stringify(passwordReset);
    return this.http.post<string>(this.backendUserUrl, body, {headers: this.httpHeaders})
        .toPromise()
        .then(response => response)
        .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }

}
