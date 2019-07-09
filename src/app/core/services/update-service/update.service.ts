import { Injectable } from '@angular/core';

@Injectable()
export class UpdateService {

  private userToBeEdited: string;
  private userId: number;

  constructor() { }

  public getUserToBeEdited() {
    return this.userToBeEdited;
  }

  public setUserToBeEdited(username: string) {
    this.userToBeEdited = username;
  }

  public getUserId() {
    return this.userId;
  }

  public setUserId(userId: number) {
    this.userId = userId;
  }

}
