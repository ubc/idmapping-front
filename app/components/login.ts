import {Component} from '@angular/core';
import {Router} from '@angular/router-deprecated';
import {Auth} from '../services/auth';

@Component({
  moduleId: module.id,
  selector: 'login',
  templateUrl: 'login.html'
})
export class LoginComponent {

  public username:String;
  public password:String;

  constructor(private _router: Router, private _auth: Auth) {}

  login(event) {
    // This will be called when the user clicks on the Login button
    event.preventDefault();

    // We call our API to log the user in. The username and password are entered by the user
    this._auth.login(this.username, this.password).subscribe(() => {
      this._router.navigate(['Search']);
    }, (error)=> {
      console.log(error);
    });
  }
}
