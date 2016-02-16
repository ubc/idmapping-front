import {Component} from "angular2/core";
import {Router} from "angular2/router";
import {Auth} from "../services/auth";

@Component({
  selector: 'login',
  templateUrl: './components/login.html'
})
export class LoginComponent {
  constructor(private _router: Router, private _auth: Auth) {}

  login(event, username, password) {
    // This will be called when the user clicks on the Login button
    event.preventDefault();

    // We call our API to log the user in. The username and password are entered by the user
    this._auth.login(username, password).subscribe(() => {
      this._router.navigate(['Search']);
    }, (error)=> {
      alert(error.message);
      console.log(error.message);
    });
  }
}
