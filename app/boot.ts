import {bootstrap} from '@angular/platform-browser-dynamic';
import {ROUTER_PROVIDERS} from '@angular/router-deprecated';
import {HTTP_PROVIDERS} from '@angular/http';
import {provide} from '@angular/core';
import {AppComponent} from './components/app';
import {AUTH_PROVIDERS} from 'angular2-jwt/angular2-jwt';

// import config = require('../config.js');
// Temp as require has stopped...requiring
var config = {
    'BACKEND_URL': 'http://localhost:8080'
};

bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  AUTH_PROVIDERS,
  provide('app.config', {useValue: config})
]);
