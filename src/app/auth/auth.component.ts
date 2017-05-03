import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';
import { AppComponent } from '../app.component'

@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css'],
  providers: [ UserService ]
})
export class AuthComponent implements OnInit {

  constructor(private router: Router,
              private userService: UserService,
              private appComponent: AppComponent) { }

  ngOnInit() { }

  loginUser(username, password) {
    this.userService.authUser(username, password)
      .subscribe(data => {
          var user = JSON.parse(data['_body']);
          this.userService.loginUser(user.username);
          this.appComponent.showSnack("Usuário autenticado com sucesso!");
      }, error => {
          this.appComponent.showSnack("Erro ao autenticar o usuário!");
      });
  }

}
