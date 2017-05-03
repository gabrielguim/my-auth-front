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
    this.userService.authUser(username, password)
      .subscribe(data => {
          console.log(data);

      }, error => {
          console.log(error);
      });
  }

}
