/* tslint:disable:no-unused-variable */

import {
  beforeEach, beforeEachProviders,
  describe, xdescribe,
  expect, it, xit,
  async, inject
} from '@angular/core/testing';
import { AppComponent } from './app.component';
// import {ROUTER_FAKE_PROVIDERS} from '@angular/router/testing';

beforeEachProviders(() => [AppComponent]);

describe('App: IDMap', () => {
  beforeEachProviders(() => {
    return [
      // ROUTER_FAKE_PROVIDERS
    ];
  });

  // it('should create the app',
  //     inject([AppComponent], (app: AppComponent) => {
  //   expect(app).toBeTruthy();
  // }));

  // it('should have as title \'app works!\'',
  //     inject([AppComponent], (app: AppComponent) => {
  //   expect(app.title).toEqual('app works!');
  // }));
});
