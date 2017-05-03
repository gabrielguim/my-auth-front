import { Injectable } from '@angular/core';

import {
  Http,
  Response,
  Headers,
  RequestOptions
} from '@angular/http';

import { Observable } from 'rxjs/Rx';
import { Router } from '@angular/router';

@Injectable()
export class UserService {

  constructor(
     private http: Http,
     private router: Router
  ) { }

  public authUser(username, password){
    var data = { username: username, password: password };
    var url = 'http://localhost:8000/api/user/auth';
    return this.http.post(url, data);
  }

  public registerUser(name, username, password) {
    var data = { name: 'name', username: username, password: password};
    return this.http.post('https://smallappapi.herokuapp.com/api/user/login', data);
  }

  public isAuthenticated(){
    if (window.sessionStorage.getItem('user') === null) {
      return false;
    } else {
      return true;
    }
  }

  public loginUser(data){
    window.sessionStorage.setItem('user', JSON.stringify(data._body));
    this.router.navigate(['/home']);
  }

  public getAuthenticatedUser(){
    let userSession = JSON.parse(window.sessionStorage.getItem('user'))
    return userSession;
  }

  public logoutUser() {
    window.sessionStorage.clear();
  	this.router.navigate(['/signin']);
  }
}
