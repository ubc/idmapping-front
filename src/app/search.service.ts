import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import {environment} from './environment';
import {HttpClient} from '@angular/common/http';
import {HttpParams} from '@angular/common/http';
// need this to use map reducer for http

@Injectable()
export class SearchService {
  constructor(private _http: HttpClient) {};

  search(q): Observable<{}> {
    let query = new HttpParams()
      .append('wants', 'first_name')
      .append('wants', 'last_name')
      .append('wants', 'edx_username')
      .append('wants', 'cwl')
      .append('wants', 'email')
      .append('wants', 'user_id')
      .append('wants', 'student_number');

    if (!(q instanceof Array)) {
      q = [q];
    }

    for (let i = 0; i < q.length; i++) {
      for (let key in q[i]) {
        if (q[i].hasOwnProperty(key)) {
          query = query.append(key, q[i][key]);
        }
      }
    }

    return this._http.get(environment.backend_url + '/api/map', { params: query });
  }
}
