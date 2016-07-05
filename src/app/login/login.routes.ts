import {LoginComponent} from './login.component';
import {AuthGuard} from '../auth.guard';
import {AuthService} from '../auth.service';
export const LoginRoutes = [
  { path: 'login', component: LoginComponent }
];
export const AUTH_PROVIDERS = [AuthGuard, AuthService];
