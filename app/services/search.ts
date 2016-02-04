import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import {Inject} from "angular2/core";
import {URLSearchParams} from "angular2/http";
import {Observable} from "rxjs/Observable";
import {Response} from "angular2/http";
import {Headers} from "angular2/http";

@Injectable()
export class SearchService {
  constructor(@Inject('app.config') private _config, private _http: Http) {};

  search(q) : Observable<Response> {
    var query = new URLSearchParams();
    query.append('wants', 'first_name');
    query.append('wants', 'last_name');
    query.append('wants', 'edx_username');
    query.append('wants', 'email');
    query.append('wants', 'user_id');
    query.append('wants', 'student_number');

    for (var key in q) {
      query.set(key, q[key]);
    }

    var headers = new Headers();
    headers.append('Authorization', 'Token ' + '1b7331916096ee357e32b1bd6427d53d613ace51');
    return this._http.get(this._config.BACKEND_URL + '/api/map', { headers: headers, search: query })
      .map(res => res.json());
  }
}
