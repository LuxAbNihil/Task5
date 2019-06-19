import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  private isUserLoggedIn: boolean;
  private username: string;
  constructor() {
    this.isUserLoggedIn = false;
  }

  setUserLoggedIn() {
    this.isUserLoggedIn = true;
  }

  getUserLoggedIn(): boolean {
    return this.isUserLoggedIn;
  }

}
