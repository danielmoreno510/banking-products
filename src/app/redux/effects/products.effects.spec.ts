import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { ProductsEffects } from './products.effects';

describe('AuthEffects', () => {
  let actions$: Observable<any>;
  let effects: ProductsEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ProductsEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get<ProductsEffects>(ProductsEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
