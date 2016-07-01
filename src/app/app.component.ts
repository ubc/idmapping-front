import { Component } from '@angular/core';
import {RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS, Router, CanActivate} from '@angular/router-deprecated';
import {tokenNotExpired} from 'angular2-jwt/angular2-jwt';
import {AuthService} from './auth.service';
import {SearchComponent} from './search';
import {HeaderComponent} from './header';
import {LoginComponent} from './login';

@Component({
  moduleId: module.id,
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  directives: [ROUTER_DIRECTIVES, HeaderComponent],
  providers: [AuthService, ROUTER_PROVIDERS]
})
@RouteConfig([
  {path: '/login', name: 'Login', component: LoginComponent, useAsDefault: false},
  {path: '/search', name: 'Search', component: SearchComponent, useAsDefault: true}
])
@CanActivate(() => tokenNotExpired())

export class AppComponent {
  constructor(private _router: Router, private _auth: AuthService) {
    this._auth.userLoggedOut$.subscribe(isLoggedOut => this.onUserLoggedOut(isLoggedOut));
  }

  private onUserLoggedOut(isLoggedOut: boolean) {
    if (isLoggedOut) {
      this._router.navigate(['Login']);
    }
  }
}
