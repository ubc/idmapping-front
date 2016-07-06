import {Component, OnInit} from '@angular/core';
import {SearchService} from '../search.service';

@Component({
  moduleId: module.id,
  templateUrl: 'bulk-search.component.html',
  providers: [SearchService]
})
export class BulkSearchComponent implements OnInit {
  public listResult;
  public query = {};

  constructor(private _searchService: SearchService) {
  }

  search() {
    this.listResult = this._searchService.search(this.query);
  }

  ngOnInit() {
  }
}
