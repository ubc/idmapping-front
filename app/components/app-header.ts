import {Component, EventEmitter, Input, Output} from 'angular2/core';
import {ComponentInstruction} from "angular2/router";
import {Router} from "angular2/router";
import {Auth} from "../services/auth";

// import {AppComponent} from "./app";

@Component({
  selector: 'app-header',
  templateUrl: './components/app-header.html',
  providers: []
})

export class AppHeaderComponent {

  private isAuth: boolean;
  private user;

  @Output() onLogout = new EventEmitter<boolean>();

  constructor(private _router: Router, private _auth: Auth) {

	  this.isAuth = this._auth.isAuth();
      if (!this.isAuth) {
        this._router.navigate(['Login']);
      }

	  this.user = this._auth.getUser();
  }

  logout() {
	 this.onLogout.emit(true);
	 this.setAuth(false);
  }

  setAuth(authd) {
	  console.log( 'in setAuth' );
	  console.log( authd );
	  this.isAuth = authd;
  }

}
