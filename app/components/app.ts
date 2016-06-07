import {Component, EventEmitter, Output} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router, CanActivate} from '@angular/router-deprecated';
import {SearchComponent} from './search';
import {LoginComponent} from './login';
import {AppHeaderComponent} from './app-header';
import {Auth} from '../services/auth';
import {tokenNotExpired} from 'angular2-jwt/angular2-jwt';

@Component({
  selector: 'my-app',
  templateUrl: './components/app.html',
  directives: [ROUTER_DIRECTIVES, AppHeaderComponent],
  providers: [Auth, ROUTER_PROVIDERS]
})
@RouteConfig([
  {path:'/login', name: 'Login', component: LoginComponent, useAsDefault: false},
  {path:'/search', name: 'Search', component: SearchComponent, useAsDefault: true}
])
@CanActivate(() => tokenNotExpired())

export class AppComponent {
  @Output() onLogin = new EventEmitter<boolean>();
  private isAuth: boolean;
  private user;

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
