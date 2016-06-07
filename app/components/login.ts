import {Component, EventEmitter, Output} from '@angular/core';
import {Router} from '@angular/router-deprecated';
import {Auth} from '../services/auth';

@Component({
  selector: 'login',
  templateUrl: './components/login.html'
})
export class LoginComponent {

  public username:String;
  public password:String;

  @Output() onLogin = new EventEmitter<boolean>();

  constructor(private _router: Router, private _auth: Auth) {}

  login(event) {
      console.log( 'login login()' );
    // This will be called when the user clicks on the Login button
    event.preventDefault();

    // We call our API to log the user in. The username and password are entered by the user
    // console.log( this.username );
    this._auth.login(this.username, this.password).subscribe(() => {
        console.log( ['login, subscribe: ', this] );
        this.onLogin.emit(true);
        this._router.navigate(['Search']);
    }, (error)=> {
    //   alert(error);
      console.log(error);
    });
  }
}
