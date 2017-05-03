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
    let data = { username: username, password: password };
    let url = 'https://my-auth-app.herokuapp.com/api/user/auth';
    return this.http.post(url, data);
  }

  public registerUser(name, username, password) {
    let data = { name: name, username: username, password: password };
    let url = 'https://my-auth-app.herokuapp.com/api/user/new';
    return this.http.post(url, data);
  }

  public isAuthenticated(){
    if (window.sessionStorage.getItem('user') === null) {
      return false;
    } else {
      return true;
    }
  }

  public loginUser(username){
    this.http.get('https://my-auth-app.herokuapp.com/api/user/' + username )
      .subscribe(data => {
          let user = data['_body'];
          window.sessionStorage.setItem('user', user);
          this.router.navigate(['/home']);
      }, error => {
          console.log(error);
      });
  }

  public getAuthenticatedUser(){
    let userSession = JSON.parse(window.sessionStorage.getItem('user'));
    return userSession;
  }

  public logoutUser() {
    window.sessionStorage.clear();
  	this.router.navigate(['/']);
  }
}
