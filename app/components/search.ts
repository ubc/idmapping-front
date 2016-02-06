import {Component} from 'angular2/core';
import {RouteConfig} from "angular2/router";
import {SearchService} from "../services/search";

@Component({
  selector: 'my-app',
  templateUrl: './components/search.html',
  providers: [SearchService]
})
export class SearchComponent {
  public linkedTools = ['Edx', 'MyTool'];
  public functions = ['Individual Students', 'Grade/Enrolment'];
  public selectedTool;
  public selectedFunction;
  public listResult;
  public query = {};

  constructor(private _searchService: SearchService) {}

  search() {
    this.listResult = this._searchService.search(this.query);
  }
}
