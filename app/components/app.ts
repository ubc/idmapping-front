import {Component} from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router, CanActivate} from '@angular/router-deprecated';
import {SearchComponent} from './search';
import {LoginComponent} from './login';
import {AppHeaderComponent} from './app-header';
import {Auth} from '../services/auth';
import {tokenNotExpired} from 'angular2-jwt/angular2-jwt';

@Component({
  moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.html',
  directives: [ROUTER_DIRECTIVES, AppHeaderComponent],
  providers: [Auth, ROUTER_PROVIDERS]
})
@RouteConfig([
  {path:'/login', name: 'Login', component: LoginComponent, useAsDefault: false},
  {path:'/search', name: 'Search', component: SearchComponent, useAsDefault: true}
])
@CanActivate(() => tokenNotExpired())

export class AppComponent {
  constructor(private _router: Router, private _auth: Auth) {
    this._auth.userLoggedOut$.subscribe(isLoggedOut => this.onUserLoggedOut(isLoggedOut));
  }

  private onUserLoggedOut(isLoggedOut:boolean) {
    if (isLoggedOut) {
      this._router.navigate(['Login']);
    }
  }
}
