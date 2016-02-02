import {bootstrap}    from 'angular2/platform/browser'
import {AppComponent} from './app'
import {ROUTER_PROVIDERS} from "angular2/router";
import {HTTP_PROVIDERS} from "angular2/http";
import {SearchService} from "../services/search";
// need this to use map reducer for http
import 'rxjs/add/operator/map';
import {provide} from "angular2/core";
import config = require("../config.js");

bootstrap(AppComponent, [
  ROUTER_PROVIDERS,
  HTTP_PROVIDERS,
  SearchService,
  provide('app.config', {useValue: config})
]);
