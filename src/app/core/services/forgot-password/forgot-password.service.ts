import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class ForgotPasswordService {
  private backendUserUrl = 'http://localhost:8080/videosharebe/user/forgotPassword/';
  private httpHeaders = new HttpHeaders({'Content-Type': 'application/json'});

  constructor(
    private httpClient: HttpClient,
  ) { }

  submitRequestForEmailToken(email: string) {
    console.log(this.backendUserUrl + email);
    const body = JSON.stringify(email);
    return this.httpClient.post(this.backendUserUrl, body, {headers: this.httpHeaders})
      .toPromise()
      .then(response => response)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }
}
