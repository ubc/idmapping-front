import {Component, EventEmitter, Output} from '@angular/core';
import {Router} from '@angular/router-deprecated';
import {Auth} from '../services/auth';

@Component({
  selector: 'app-header',
  templateUrl: './components/app-header.html',
  providers: []
})

export class AppHeaderComponent {

  @Output() onLogout = new EventEmitter<boolean>();
  private isAuth: boolean;
  private user;

  constructor(private _router: Router, private _auth: Auth) {
    console.log( 'app-header constructor()' );
    // setTimeout( () => this.offendingAction(), 0);
    this.isAuth = this._auth.isAuth();
    console.log( 'app-header contructor isAuth: ' + this.isAuth );
    if (!this.isAuth) {
      this._router.navigate(['Login']);
    }
    console.log( this._auth.getUser() );
    console.log( this._auth );
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

  getAuth() {
    //   console.log( 'in getAuth' );
    //   console.log( this._auth.isAuth() );
      return this._auth.isAuth();
  }
}
