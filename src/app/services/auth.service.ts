import { Injectable } from '@angular/core';
import { lastValueFrom, map } from 'rxjs';
import { User } from '../models/user';
import { ApiService, GetUsersResult } from './api.service';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  static STORAGE_ISLOGGED_IN = 'isLoggedIn';

  private _isLoggedIn = false;
  public get isLoggedIn() {
    return this._isLoggedIn;
  }

  constructor(private storageService: StorageService, private apiService: ApiService) {
    this.loadIsLoggedInFromStorage();
  }

  loadIsLoggedInFromStorage() {
    const isLoggedInStr = this.storageService.getItem(AuthService.STORAGE_ISLOGGED_IN);
    this._isLoggedIn = isLoggedInStr ? JSON.parse(isLoggedInStr) : false;
  }

  async login(email: string, password: string) {
    const users = await lastValueFrom(this.getUsers());

    const foundUserIndex = users.findIndex((user) => user.email === email && user.password === password);

    if (foundUserIndex === -1) return Promise.reject('User not found');

    this._isLoggedIn = true;
    this.storeIsLoggedIn();
    return Promise.resolve();
  }

  private getUsers() {
    return this.apiService.getUsers()
    .pipe(
      map((res: GetUsersResult) => {
        const users: User[] = [];
        if (!res) return [];
        Object.entries(res).forEach(([id, user]) => {
          users.push({
            ...user,
            id,
          });
        });
        return users;
      })
    );
  }

  logout() {
    this._isLoggedIn = false;
    this.storeIsLoggedIn();
  }

  storeIsLoggedIn() {
    this.storageService.storeItem(AuthService.STORAGE_ISLOGGED_IN, JSON.stringify(this._isLoggedIn));
  }

  isAuthenticated(): Promise<boolean> {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(this._isLoggedIn);
      }, 0);
    });
  }
}
