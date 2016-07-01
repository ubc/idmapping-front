/* tslint:disable:no-unused-variable */

import {beforeEachProviders, describe, expect, it, inject} from '@angular/core/testing';
import {AuthService} from './auth.service';
import {HTTP_PROVIDERS} from '@angular/http';

describe('Auth Service', () => {
  beforeEachProviders(() => {
    return [
      HTTP_PROVIDERS,
      AuthService
    ];
  });

  it('should ...',
      inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
