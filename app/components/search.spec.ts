import {
  describe,
  expect,
  beforeEach,
  it,
  inject,
  injectAsync,
  beforeEachProviders,
  TestComponentBuilder,
  ComponentFixture
} from 'angular2/testing';
import {provide} from "angular2/core";
import {Observable} from "rxjs/Observable";
import {HTTP_PROVIDERS, Response} from "angular2/http";
import {SearchService} from "../services/search";
import {SearchComponent} from "./search";
import {DirectiveResolver} from "angular2/core";
import {ViewResolver} from "angular2/core";

import {setBaseTestProviders} from 'angular2/testing';
import {
  TEST_BROWSER_PLATFORM_PROVIDERS,
  TEST_BROWSER_APPLICATION_PROVIDERS
} from 'angular2/platform/testing/browser';
setBaseTestProviders(TEST_BROWSER_PLATFORM_PROVIDERS,
  TEST_BROWSER_APPLICATION_PROVIDERS);

class MockSearchService extends SearchService {
  query;
  public search(query): Observable<Response> {
    this.query = query;
    return Observable.create([{data:'test'}]);
  }
}

describe('Search component', () => {
  let config = {
    BACKEND_URL: 'http://backend'
  };

  beforeEachProviders(() => [
    HTTP_PROVIDERS,
    provide('app.config', {useValue: config}),
    provide(SearchService, {useClass: MockSearchService}),
  ]);

  beforeEach(injectAsync([TestComponentBuilder], (tcb: TestComponentBuilder) => {
    return tcb
      // need this in order to override on the component level
      .overrideProviders(SearchComponent, [provide(SearchService, {useClass: MockSearchService})])
      .createAsync(SearchComponent)
      .then((componentFixture:ComponentFixture) => {
        this.fixture = componentFixture;
      });
  }));

  it('should fetch the search result from search service', () => {
    let q = {student_id: '1234567'};
    const element = this.fixture.nativeElement;
    const instance = this.fixture.debugElement.componentInstance;
    this.fixture.detectChanges();
    expect(element.querySelectorAll('paper-dropdown-menu').length).toBe(2);
    instance.query = q;
    instance.search();
    expect(instance._searchService.query).toEqual(q);
  });
});
