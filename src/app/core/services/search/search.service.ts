import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Video } from '../../../models/video';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class SearchService {

  private url = 'http://localhost:8080/videosharebe/upload/';

  constructor(
    private http: HttpClient
  ) { }

  videoSearch(searchTerm: string): Observable<Video[]> {
    console.log(this.url + searchTerm);
    return this.http.get<Video[]>(this.url + searchTerm);
  }

  private handleError(error: any): Promise<any> {
    console.error('An error occured.', error);
    return Promise.reject(error.message || error);
  }
}
