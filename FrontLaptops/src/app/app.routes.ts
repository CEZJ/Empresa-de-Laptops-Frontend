import { Routes } from '@angular/router';
import {LoginCarlosZegarra} from './component/login-carlos-zegarra/login-carlos-zegarra';
import {HomeCarlosZegarra} from './component/home-carlos-zegarra/home-carlos-zegarra';
import {ReportesCarlosZegarra} from './component/reportes-carlos-zegarra/reportes-carlos-zegarra';
import {AuthGuard} from './auth-guard';

export const routes: Routes = [{ path: '', redirectTo: 'Login', pathMatch: 'full' },
  { path: 'Login', component: LoginCarlosZegarra},
  { path: 'Home', component: HomeCarlosZegarra, canActivate: [AuthGuard] },
  { path: 'Reportes', component: ReportesCarlosZegarra, canActivate: [AuthGuard] },
];
