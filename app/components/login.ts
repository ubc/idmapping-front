import {Component} from "angular2/core";
@Component({
  selector: 'login',
  templateUrl: './components/login.html'
})
export class LoginComponent {
  //login(event, username, password) {
  //  // This will be called when the user clicks on the Login button
  //  event.preventDefault();
  //
  //  // We call our API to log the user in. The username and password are entered by the user
  //  fetch('http://localhost:3001/sessions/create', {
  //    method: 'POST',
  //    headers: {
  //      'Accept': 'application/json',
  //      'Content-Type': 'application/json'
  //    },
  //    body: JSON.stringify({
  //      username, password
  //    })
  //  })
  //    .then(status)
  //    .then(json)
  //    .then((response) => {
  //      // Once we get the JWT in the response, we save it into localStorage
  //      localStorage.setItem('jwt', response.id_token);
  //      // and then we redirect the user to the home
  //      this._router.navigate('/home');
  //    })
  //    .catch((error) => {
  //      alert(error.message);
  //      console.log(error.message);
  //    });
  //}
}
