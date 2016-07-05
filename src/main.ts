import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { AppComponent, environment } from './app/';
import { APP_ROUTER_PROVIDER } from './app/app.routes';
import { HTTP_PROVIDERS } from '@angular/http';
import { AUTH_PROVIDERS } from 'angular2-jwt/angular2-jwt';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [
  APP_ROUTER_PROVIDER,
  HTTP_PROVIDERS,
  AUTH_PROVIDERS
]);
