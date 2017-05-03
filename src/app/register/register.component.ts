import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
  providers: [ UserService ]
})
export class RegisterComponent implements OnInit {

  constructor(private router: Router,
              private userService: UserService) { }

  ngOnInit() {
  }

  registerUser (name, username, password) {
    this.userService.registerUser(name, username, password)
      .subscribe(data => {
          var user = JSON.parse(data['_body']);
          this.router.navigate(['/']);
      }, error => {
          console.log(error);
      });
  }

}
