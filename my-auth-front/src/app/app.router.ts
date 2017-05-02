import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AuthComponent } from './auth/auth.component';
import { RegisterComponent } from './register/register.component';

import { AuthService } from './services/auth.service';

export const router: Routes = [
  { path: 'home', component: HomeComponent, canActivate: [AuthService] },
  { path: '', component: AuthComponent, canActivate: [AuthService]},
  { path: 'register', component: RegisterComponent },
  { path: '**', redirectTo: '/'}
];

export const routes: ModuleWithProviders = RouterModule.forRoot(router);
