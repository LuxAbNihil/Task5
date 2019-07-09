import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class UploadService {

  private url = 'http://localhost:8080/videosharebe/upload/';

  constructor(
    private http: HttpClient
  ) { }

  uploadVideo(formdata: any, username: String) {
    return this.http.post(this.url + username, formdata)
      .catch(this.handleError);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occured', error);
    return Promise.reject(error.message || error);
  }
}
