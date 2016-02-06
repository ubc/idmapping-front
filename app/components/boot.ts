import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app'
import {ROUTER_PROVIDERS} from "angular2/router";
import {HTTP_PROVIDERS} from "angular2/http";
import {provide} from "angular2/core";
import config = require("../config.js");

bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  provide('app.config', {useValue: config})
]);
