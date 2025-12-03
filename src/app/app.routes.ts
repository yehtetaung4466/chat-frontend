import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { Signup } from './modules/signup/signup';
import { authGuard } from './guards/auth-guard';
import { Login } from './modules/login/login';

export const routes: Routes = [
  {path:'signup',component:Signup},
  {path:'login',component:Login},
  {path:'home',component:HomeComponent, canActivate:[authGuard]},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
];