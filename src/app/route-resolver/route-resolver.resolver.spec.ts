import { TestBed } from '@angular/core/testing';
import { ResolveFn } from '@angular/router';

import { routeResolverResolver } from './route-resolver.resolver';

describe('routeResolverResolver', () => {
  const executeResolver: ResolveFn<boolean> = (...resolverParameters) => 
      TestBed.runInInjectionContext(() => routeResolverResolver(...resolverParameters));

  beforeEach(() => {
    TestBed.configureTestingModule({});
  });

  it('should be created', () => {
    expect(executeResolver).toBeTruthy();
  });
});
