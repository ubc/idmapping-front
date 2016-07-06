import {provideRouter, RouterConfig} from '@angular/router';
import {LoginRoutes, AUTH_PROVIDERS} from './login';
import {SearchRoutes} from './search';

export const appRoutes: RouterConfig = [
  ...LoginRoutes,
  ...SearchRoutes
];

export const APP_ROUTER_PROVIDER = [
  provideRouter(appRoutes),
  AUTH_PROVIDERS
];
