import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from "../models/user";

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) {
  }

  login(userData: User) {
    localStorage.setItem('currentUser',JSON.stringify(userData));
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}
