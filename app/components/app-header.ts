import {Component} from '@angular/core';
import {Router} from '@angular/router-deprecated';
import {Auth} from '../services/auth';

@Component({
  moduleId: module.id,
  selector: 'app-header',
  templateUrl: 'app-header.html',
  providers: []
})

export class AppHeaderComponent {

  private user;

  constructor(private _router: Router, private _auth: Auth) {
    this.user = { username: 'guest'};
    this._auth.userLoggedIn$.subscribe(user => this.onUserLoggedIn(user));
    if (!this._auth.isAuth()) {
      this._router.navigate(['Login']);
    }
  }

  logout() {
    this.user = { username: 'guest'};
    this._auth.logout();
  }

  getAuth() {
    return this._auth.isAuth();
  }

  private onUserLoggedIn(user:any) {
    this.user = user;
  }
}
