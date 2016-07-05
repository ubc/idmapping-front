import { provideRouter, RouterConfig } from '@angular/router';

import {LoginRoutes, AUTH_PROVIDERS} from './login/login.routes';
import {SearchRoutes} from './search/search.routes';

export const appRoutes: RouterConfig = [
  ...LoginRoutes,
  ...SearchRoutes
];

export const APP_ROUTER_PROVIDER = [
  provideRouter(appRoutes),
  AUTH_PROVIDERS
];
