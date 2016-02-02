import {Injectable} from "angular2/core";
import {Http} from "angular2/http";
import {Inject} from "angular2/core";

@Injectable()
export class SearchService {
  constructor(@Inject('app.config') private _config, private _http: Http) {};

  search() {
    return this._http.get(this._config.BACKEND_URL + '/api/map')
      .map(res => res.json());
  }
}
