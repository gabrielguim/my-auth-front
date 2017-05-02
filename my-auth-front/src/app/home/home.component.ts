import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ UserService ]
})
export class HomeComponent implements OnInit {

  username = this.userService.getAuthenticatedUser()

  constructor(private router: Router,
              private userService: UserService) { }

  ngOnInit() { }

  public logoutUser() {
      this.userService.logoutUser();
  }


}
