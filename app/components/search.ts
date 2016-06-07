import {Component} from '@angular/core';
import {CanActivate} from '@angular/router-deprecated';
import {SearchService} from '../services/search';
import {AppHeaderComponent} from './app-header';

function testToken() {
  console.log('aaaa');
  return true;
}

@Component({
  selector: 'my-app',
  templateUrl: './components/search.html',
  providers: [SearchService,AppHeaderComponent],
  directives: [AppHeaderComponent]
})
@CanActivate(() => testToken())
export class SearchComponent {
  public linkedTools = ['Edx', 'MyTool'];
  public functions = ['Individual Students', 'Grade/Enrolment'];
  public selectedTool;
  public selectedFunction;
  public listResult;
  public query = {};

  constructor(private _searchService: SearchService, _AppHeaderComponent: AppHeaderComponent) {}

  search() {
    this.listResult = this._searchService.search(this.query);
  }
}
