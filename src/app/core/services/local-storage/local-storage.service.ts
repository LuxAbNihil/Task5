import { Injectable } from '@angular/core';
import { TokenParams } from '../../../classes/token-params';

@Injectable()
export class LocalStorageService {

  constructor() { }

  public setAuthorizationData(auth: String): void {
    localStorage.setItem('Authorization', JSON.stringify(auth));
  }

  public getAuthorizationData(): String {
    const tokendata = JSON.parse(localStorage.getItem('Authorization'));
    return tokendata;
  }

}
