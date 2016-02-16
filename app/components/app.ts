import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from "angular2/router";
import {SearchComponent} from "./search";
import {LoginComponent} from "./login";
import {Auth} from "../services/auth";
import {Router} from "angular2/router";
import {CanActivate} from "angular2/router";
import {ComponentInstruction} from "angular2/router";

function testToken() {
  console.log('aaaa');
  return true;
}

@Component({
  selector: 'my-app',
  templateUrl: './components/app.html',
  directives: [ROUTER_DIRECTIVES],
  providers: [Auth]
})
@RouteConfig([
  {path:'/login', name: 'Login', component: LoginComponent, useAsDefault: false},
  {path:'/search', name: 'Search', component: SearchComponent, useAsDefault: true},
])
@CanActivate(() => testToken())
//  (next, prev) => {
//  console.log('canactivate');
//  if (!this._auth.isAuth()) {
//    next.component = LoginComponent;
//  }
//
//  return true;
//})
export class AppComponent {
  private isAuth: boolean;
  private user;

  constructor(private _router: Router, private _auth: Auth) {
    this.isAuth = this._auth.isAuth();
    if (this.isAuth) {
      this.user = this._auth.getUser();
    }
  }

  login(event) {
    event.preventDefault();
    this._router.navigate(['Login']);
  }

  logout(event) {
    event.preventDefault();
    this._auth.logout();
    this.isAuth = false;
    this.user = null;
  }
}
