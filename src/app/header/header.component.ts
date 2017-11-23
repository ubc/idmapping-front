import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from '../auth.service';
import {MatButtonModule} from '@angular/material';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})
export class HeaderComponent implements OnInit {

  private user;

  constructor(private _router: Router, private _auth: AuthService) {
    this.user = { username: 'guest'};
  }

  logout() {
    this.user = { username: 'guest'};
    this._auth.logout();
  }

  getAuth() {
    return this._auth.loggedIn();
  }

  ngOnInit() {
    this._auth.userLoggedIn$.subscribe(user => this.onUserLoggedIn(user));
    if (!this._auth.loggedIn()) {
      this._router.navigate(['/login']);
      return;
    }
    this.user = this._auth.getUser();
  }

  private onUserLoggedIn(user: any) {
    this.user = user;
  }
}
