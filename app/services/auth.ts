import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import {Inject} from "angular2/core";
import {RequestOptionsArgs} from "angular2/http";
import {Headers} from "angular2/http";
//import jwtDecode = require("jwt-decode");
import {Observable} from "rxjs/Observable";
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

declare var jwt_decode: any;

@Injectable()
export class Auth {
  private token: string;
  private user;
  constructor(@Inject('app.config') private _config, private _http: Http) {
    this.token = localStorage.getItem('jwt');
    this.user = this.token && jwt_decode(this.token);
  }

  isAuth() {
    return !!this.token;
  }

  getUser() {
    return this.user;
  }

  login(username, password): Observable {
    let options: RequestOptionsArgs = {
      headers: new Headers({
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      })
    };
    return this._http.post(this._config.BACKEND_URL + '/sessions/create', JSON.stringify({username, password}), options)
      .map(res => res.json())
      .do(res => {
        this.token = res.id_token;
        localStorage.setItem('jwt', this.token);
      });
  }

  logout() {
    localStorage.removeItem('jwt');
    this.token = null;
    this.user = null;
  }
}