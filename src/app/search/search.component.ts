import { Component, OnInit } from '@angular/core';
import {SearchService} from '../search.service';

@Component({
  moduleId: module.id,
  selector: 'app-search',
  templateUrl: 'search.component.html',
  styleUrls: ['search.component.css'],
  providers: [SearchService]
})
export class SearchComponent implements OnInit {
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

  ngOnInit() {
  }
}
