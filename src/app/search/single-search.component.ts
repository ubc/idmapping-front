import {Component} from '@angular/core';
import {SearchService} from '../search.service';

@Component({
  moduleId: module.id,
  templateUrl: 'single-search.component.html',
  providers: [SearchService]
})
export class SingleSearchComponent {
  public listResult;
  public query = {};

  constructor(private _searchService: SearchService) {
  }

  search() {
    this.listResult = this._searchService.search(this.query);
    return this.listResult;
  }
}
