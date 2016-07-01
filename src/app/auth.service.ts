import {Injectable, EventEmitter} from '@angular/core';
import {RequestOptionsArgs, Response, Headers, Http} from '@angular/http';
import {JwtHelper} from 'angular2-jwt/angular2-jwt';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {environment} from './environment';

@Injectable()
export class AuthService {

  public userLoggedIn$: EventEmitter<Object>;
  public userLoggedOut$: EventEmitter<Object>;
  private token: string;
  private user;
  private jwtHelper: JwtHelper = new JwtHelper();

  constructor(private _http: Http) {
    this.userLoggedIn$ = new EventEmitter();
    this.userLoggedOut$ = new EventEmitter();
    this.token = localStorage.getItem('jwt');
    this.user = this.token && this.jwtHelper.decodeToken(this.token);
  }

  isAuth() {
    return !!this.token;
  }

  getUser() {
    return this.user;
  }

  login(username, password): Observable<Response> {
    let options: RequestOptionsArgs = {
      headers: new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      })
    };
    return this._http.post(environment.backend_url + '/sessions/create', JSON.stringify({username, password}), options)
      .map(res => res.json())
      .do(res => {
        this.token = res.id_token;
        localStorage.setItem('jwt', this.token);
        this.user = this.jwtHelper.decodeToken(this.token);
        this.userLoggedIn$.emit(this.user);
      });
  }

  logout() {
    localStorage.removeItem('jwt');
    this.token = null;
    this.user = null;
    this.userLoggedOut$.emit(true);
  }
}
