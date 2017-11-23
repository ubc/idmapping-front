import {Injectable, EventEmitter} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import {environment} from './environment';
import {JwtHelperService} from '@auth0/angular-jwt';
import {HttpClient} from '@angular/common/http';
import {HttpHeaders} from '@angular/common/http';

@Injectable()
export class AuthService {

  public userLoggedIn$: EventEmitter<Object>;
  public userLoggedOut$: EventEmitter<Object>;
  private token: string;
  private user;

  constructor(private _http: HttpClient, private jwtHelperService: JwtHelperService) {
    this.userLoggedIn$ = new EventEmitter();
    this.userLoggedOut$ = new EventEmitter();
    this.token = localStorage.getItem('access_token');
    this.user = this.token && this.jwtHelperService.decodeToken(this.token);
  }

  loggedIn() {
    const token: string = this.jwtHelperService.tokenGetter();

    if (!token) {
      return false
    }

    const tokenExpired: boolean = this.jwtHelperService.isTokenExpired(token);

    return !tokenExpired
  }

  isAuth() {
    return !!this.token;
  }

  getUser() {
    return this.user;
  }

  login(username, password): Observable<any> {
    let headers = new HttpHeaders()
      .set('Content-Type', 'application/json');
    return this._http.post(environment.backend_url + '/api-token-auth/login', JSON.stringify({username, password}), {
      headers: headers
    })
      .do(res => {
        this.token = res['token'];
        localStorage.setItem('access_token', this.token);
        this.user = this.jwtHelperService.decodeToken(this.token);
        this.userLoggedIn$.emit(this.user);
      });
  }

  logout() {
    localStorage.removeItem('access_token');
    this.token = null;
    this.user = null;
    this.userLoggedOut$.emit(true);
  //  TODO: logout from backend
  }
}
