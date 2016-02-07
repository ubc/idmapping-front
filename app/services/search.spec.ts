import {
  describe,
  expect,
  beforeEach,
  it,
  inject,
  injectAsync,
  beforeEachProviders
} from 'angular2/testing';
import {provide} from 'angular2/core';
import {SearchService} from './search'
import {HTTP_PROVIDERS, XHRBackend, Response, ResponseOptions} from "angular2/http";
import {MockBackend, MockConnection} from "angular2/http/testing";

let config = {
  BACKEND_URL: 'http://backend'
};

describe('Search Service', () => {
  beforeEachProviders(() => {
    return [
      HTTP_PROVIDERS,
      provide(XHRBackend, {useClass: MockBackend}),
      provide('app.config', {useValue: config}),
      SearchService
    ]
  });
  it('should search the backend', inject([XHRBackend, SearchService], (mockBackend, searchService) => {
    mockBackend.connections.subscribe(
      (connection: MockConnection) => {
        this.connection = connection;
        connection.mockRespond(new Response(
          new ResponseOptions({
            body: [{
              "first_name":"Test1","last_name":"User","user_id":"3DAN9OGVLY05",
              "edx_username":"test1","student_number":"12345678","email":"test1@ubc.ca"
            }]
          })
        ))
      }
    );
    searchService.search({student_id: 1234567}).subscribe(
      data => {
        expect(this.connection.request.url).toBe('http://backend/api/map?wants=first_name&wants=last_name&wants=edx_username&wants=email&wants=user_id&wants=student_number&student_id=1234567');
        expect(this.connection.request.headers.get('Authorization')).toBe('Token 1b7331916096ee357e32b1bd6427d53d613ace51');
        expect(data.length).toBe(1);
        expect(data[0].first_name).toBe("Test1");
      }
    );
  }));
});