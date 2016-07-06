import {Component} from '@angular/core';
import {AuthService} from '../auth.service';
import {Router} from '@angular/router';

@Component({
  moduleId: module.id,
  selector: 'app-login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent {

  public username: String;
  public password: String;

  constructor(private _router: Router, private _auth: AuthService) {}

  login(event) {
    // This will be called when the user clicks on the Login button
    event.preventDefault();

    // We call our API to log the user in. The username and password are entered by the user
    this._auth.login(this.username, this.password).subscribe(() => {
      this._router.navigate(['/search']);
    }, (error) => {
      console.log(error);
    });
  }
}
