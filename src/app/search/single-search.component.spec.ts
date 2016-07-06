/* tslint:disable:no-unused-variable */

import {inject, async, addProviders, TestComponentBuilder, ComponentFixture} from '@angular/core/testing';
import {provide} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HTTP_PROVIDERS} from '@angular/http';
import {SearchService} from '../search.service';
import {SearchComponent} from './search.component';
import 'rxjs/add/observable/from';
import {SingleSearchComponent} from './single-search.component';

let queryFixture = [{
  'first_name': 'Test1', 'last_name': 'User', 'user_id': '3DAN9OGVLY05',
  'edx_username': 'test1', 'student_number': '12345678', 'email': 'test1@ubc.ca'
}];

class MockSearchService extends SearchService {
  query;
  public search(query): Observable<{}> {
    this.query = query;
    return Observable.from([queryFixture]);
  }
}

describe('Single Search component', () => {
  beforeEach(() => {
    addProviders([
      HTTP_PROVIDERS,
      provide(SearchService, {useClass: MockSearchService}),
    ]);
  });

  beforeEach(async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    return tcb
    // need this in order to override search service on the component level
      .overrideProviders(SingleSearchComponent, [provide(SearchService, {useClass: MockSearchService})])
      .createAsync(SingleSearchComponent)
      .then((componentFixture: ComponentFixture<SingleSearchComponent>) => {
        this.fixture = componentFixture;
        this.element = this.fixture.nativeElement;
        this.instance = this.fixture.debugElement.componentInstance;
      });
  })));

  it('should have empty query and listResult', () => {
    expect(this.instance.query).toEqual({});
    expect(this.instance.listResult).toBe(undefined);
  });

  it('should search the backend when search is called', () => {
    this.instance.query = {username: 'test'};
    this.instance.search().subscribe(data => {
      // expect(this.instance._searchService.query).toEqual({username: 'test'});
      // expect(this.instance.listResult).toEqual(queryFixture);
    });
  });
  // it('should populate search section after tool and search type are selected', () => {
  //   this.instance.selectedTool = 'Edx';
  //   this.instance.selectedFunction = 'Individual Students';
  //   this.fixture.detectChanges();
  //   expect(this.element.querySelector('#search-section')).not.toBe(null);
  //   expect(this.element.querySelectorAll('#search-section table').length).toBe(1);
  // });
  //
  // it('should fetch the search result from search service', () => {
  //   let q = {student_id: '1234567'};
  //   this.instance.selectedTool = 'Edx';
  //   this.instance.selectedFunction = 'Individual Students';
  //   this.instance.query = q;
  //   this.fixture.detectChanges();
  //   this.instance.search();
  //   expect(this.instance._searchService.query).toEqual(q);
  //   this.instance.listResult.subscribe(data => {
  //     expect(data).toEqual(queryFixture);
  //   });
  //   // expect(this.element.querySelectorAll('#search-section tr').length).toBe(2);
  // });
});
