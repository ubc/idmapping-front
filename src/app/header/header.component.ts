import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router-deprecated';
import { AuthService } from '../auth.service';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';

@Component({
  moduleId: module.id,
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css'],
  directives: [MD_BUTTON_DIRECTIVES]
})
export class HeaderComponent implements OnInit {

  private user;

  constructor(private _router: Router, private _auth: AuthService) {
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

  ngOnInit() {
  }

  private onUserLoggedIn(user: any) {
    this.user = user;
  }
}
