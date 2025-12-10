import { Routes } from '@angular/router';
import {HomeCarlosZegarra} from './component/home-carlos-zegarra/home-carlos-zegarra';
import {AuthGuard} from './auth-guard';
import {LoginCarlosZegarra} from './component/login-carlos-zegarra/login-carlos-zegarra';
import {ReportesCarlosZegarra} from './component/reportes-carlos-zegarra/reportes-carlos-zegarra';

export const routes: Routes = [
  { path: '', redirectTo: 'Login', pathMatch: 'full' },
  { path: 'Login', component: LoginCarlosZegarra},
  { path: 'Home', component: HomeCarlosZegarra, canActivate: [AuthGuard] },
  { path: 'Reportes', component: ReportesCarlosZegarra, canActivate: [AuthGuard] },
];
