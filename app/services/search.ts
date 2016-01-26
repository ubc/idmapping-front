import {Injectable} from "angular2/core";
import {Http} from "angular2/http";

@Injectable()
export class SearchService {
  constructor(private _http: Http) {};

  search() {
    return this._http.get('http://192.168.99.100:8000/api/map')
      .map(res => res.json());
  }
}
