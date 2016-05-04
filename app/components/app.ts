import {Component, EventEmitter, Input, Output} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES} from "@angular/router-deprecated";
import {SearchComponent} from "./search";
import {LoginComponent} from "./login";
import {AppHeaderComponent} from "./app-header";
import {Auth} from "../services/auth";
import {Router} from "@angular/router-deprecated";
import {CanActivate} from "@angular/router-deprecated";
import {ComponentInstruction} from "@angular/router-deprecated";

function testToken() {
  // console.log('aaaa');
  return true;
}

@Component({
  selector: 'my-app',
  templateUrl: './components/app.html',
  directives: [ROUTER_DIRECTIVES,AppHeaderComponent],
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

  @Output() onLogin = new EventEmitter<boolean>();

  constructor(private _router: Router, private _auth: Auth) {
      console.log( 'in app constructor: ' + this._auth.isAuth() );
    this.isAuth = this._auth.isAuth();
    if (this.isAuth) {
      this.user = this._auth.getUser();
    }
  }

  login(event) {
      console.log( 'in app login()' );
    event.preventDefault();
    this._router.navigate(['Login']);
  }

  onlogin(event) {
      console.log( 'in app onlogin()' );
  }

  logout(event) {
      console.log( 'in app logout()' );
    this._auth.logout();
    this.isAuth = false;
    this.user = null;
    this._router.navigate(['Login']);
  }
}
