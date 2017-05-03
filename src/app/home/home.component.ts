import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { AppComponent } from '../app.component'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ UserService ]
})
export class HomeComponent implements OnInit {

  user = this.userService.getAuthenticatedUser();

  constructor(private router: Router,
              private userService: UserService,
              private appComponent: AppComponent) { }

  ngOnInit() { }

  logoutUser() {
    this.userService.logoutUser();
    this.appComponent.showSnack("Usuário deslogado com sucesso!");
  }

}
