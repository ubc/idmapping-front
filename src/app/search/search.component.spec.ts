/* tslint:disable:no-unused-variable */

import {
  describe,
  expect,
  beforeEach,
  it,
  beforeEachProviders, inject, async,
} from '@angular/core/testing';
import {TestComponentBuilder, ComponentFixture} from '@angular/compiler/testing';
import {provide} from '@angular/core';
import {Observable} from 'rxjs/Rx';
import {HTTP_PROVIDERS} from '@angular/http';
import {SearchService} from '../search.service';
import {SearchComponent} from './search.component';

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

export function main() {
  describe('Search component', () => {
    let config = {
      BACKEND_URL: 'http://backend'
    };

    beforeEachProviders(() => [
      HTTP_PROVIDERS,
      provide('app.config', {useValue: config}),
      provide(SearchService, {useClass: MockSearchService}),
    ]);

    beforeEach(async(inject([TestComponentBuilder], (tcb: TestComponentBuilder) => {
      return tcb
      // need this in order to override search service on the component level
        .overrideProviders(SearchComponent, [provide(SearchService, {useClass: MockSearchService})])
        .createAsync(SearchComponent)
        .then((componentFixture: ComponentFixture<SearchComponent>) => {
          this.fixture = componentFixture;
          this.element = this.fixture.nativeElement;
          this.instance = this.fixture.debugElement.componentInstance;
        });
    })));

    it('should not populate search section', () => {
      expect(this.element.querySelector('#search-section')).toBe(null);
      expect(this.element.querySelectorAll('paper-dropdown-menu').length).toBe(2);
    });

    it('should populate search section after tool and search type are selected', () => {
      this.instance.selectedTool = 'Edx';
      this.instance.selectedFunction = 'Individual Students';
      this.fixture.detectChanges();
      expect(this.element.querySelector('#search-section')).not.toBe(null);
      expect(this.element.querySelectorAll('#search-section table').length).toBe(1);
    });

    it('should fetch the search result from search service', () => {
      let q = {student_id: '1234567'};
      this.instance.selectedTool = 'Edx';
      this.instance.selectedFunction = 'Individual Students';
      this.instance.query = q;
      this.fixture.detectChanges();
      this.instance.search();
      expect(this.instance._searchService.query).toEqual(q);
      this.instance.listResult.subscribe(data => {
        expect(data).toEqual(queryFixture);
      });
      // expect(this.element.querySelectorAll('#search-section tr').length).toBe(2);
    });
  });
}
