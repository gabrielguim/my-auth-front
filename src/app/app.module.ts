import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';

import { routes } from './app.router';
import { AuthService } from './services/auth.service'
import { UserService } from './services/user.service';
import { RegisterComponent } from './register/register.component'

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AuthComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routes
  ],
  providers: [AuthService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
