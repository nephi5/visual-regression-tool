import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';

@Injectable()
export class OnlyAdminUsersGuard implements CanActivate {
  constructor() {}

  canActivate() {
    const user = (<any>window).user;
    return user && user.isAdmin;
  }
}
