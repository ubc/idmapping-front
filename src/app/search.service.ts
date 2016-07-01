import {Injectable} from '@angular/core';
import {Http, URLSearchParams, Headers} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {environment} from './environment';
// need this to use map reducer for http

@Injectable()
export class SearchService {
  constructor(private _http: Http) {};

  search(q): Observable<{}> {
    let query = new URLSearchParams();
    query.append('wants', 'first_name');
    query.append('wants', 'last_name');
    query.append('wants', 'edx_username');
    query.append('wants', 'email');
    query.append('wants', 'user_id');
    query.append('wants', 'student_number');

    for (let key in q) {
      if (q.hasOwnProperty(key)) {
        query.set(key, q[key]);
      }
    }

    let headers = new Headers();
    headers.append('Authorization', 'Token ' + '1b7331916096ee357e32b1bd6427d53d613ace51');

    return this._http.get(environment.backend_url + '/api/map', { headers: headers, search: query })
      .map(res => res.json());
  }
}
