import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {SearchComponent} from "./search";

@Component({
  selector: 'my-app',
  templateUrl: './components/app.html',
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path:'/search', name: 'Search', component: SearchComponent, useAsDefault: true},
])
export class AppComponent {
}
