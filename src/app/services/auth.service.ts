import { Injectable } from '@angular/core';
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

  constructor(private storageService: StorageService) {
    this.loadIsLoggedInFromStorage();
  }

  loadIsLoggedInFromStorage() {
    const isLoggedInStr = this.storageService.getItem(AuthService.STORAGE_ISLOGGED_IN);
    this._isLoggedIn = isLoggedInStr ? JSON.parse(isLoggedInStr) : false;
  }

  login() {
    this._isLoggedIn = true;
    this.storeIsLoggedIn();
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
      }, 1000);
    });
  }
}
