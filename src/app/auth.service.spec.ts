/* tslint:disable:no-unused-variable */

import {addProviders, inject} from '@angular/core/testing';
import {AuthService} from './auth.service';
import {HTTP_PROVIDERS} from '@angular/http';

describe('Auth Service', () => {
  beforeEach(() => {
    addProviders([
      HTTP_PROVIDERS,
      AuthService
    ]);
  });

  it('should ...',
      inject([AuthService], (service: AuthService) => {
    expect(service).toBeTruthy();
  }));
});
