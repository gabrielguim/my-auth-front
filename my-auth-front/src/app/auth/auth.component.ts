import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  providers: [ UserService ]
})
export class AuthComponent implements OnInit {

  constructor(private router: Router,
              private userService: UserService) { }

  ngOnInit() { }

  loginUser(username, password) {
    var user = {
      data: {
        username: username,
        password: password
      }
    };

    user = JSON.parse(JSON.stringify(user));

    this.userService.loginUser(user);
  }

}
