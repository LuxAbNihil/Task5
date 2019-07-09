import { Injectable } from '@angular/core';
import { HttpEvent, HttpInterceptor, HttpHandler, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { LocalStorageService } from '../services/local-storage/local-storage.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  constructor(private localStorageService: LocalStorageService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = this.localStorageService.getAuthorizationData();
    const authHeader = '' + token; // Empty string is to force type to string primitive for compatability with setHeaders method.
    const authRequest = req.clone({setHeaders: {Authorization: authHeader}});

    return next.handle(authRequest);
  }
}
