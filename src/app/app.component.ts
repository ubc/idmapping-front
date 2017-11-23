import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthService} from './auth.service';
import {HeaderComponent} from './header';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
  //  directives: [HeaderComponent],
  providers: [AuthService]
})
export class AppComponent implements OnInit {
  constructor(private _router: Router, private _auth: AuthService) {}

  ngOnInit() {
    this._auth.userLoggedOut$.subscribe(isLoggedOut => this.onUserLoggedOut(isLoggedOut));
  }

  private onUserLoggedOut(isLoggedOut: boolean) {
    if (isLoggedOut) {
      this._router.navigate(['/login']);
    }
  }
}
