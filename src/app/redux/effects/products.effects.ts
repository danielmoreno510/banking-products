import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { tap, map, exhaustMap } from 'rxjs/operators';
import { ProductsService } from '../../services/products.service';
import { FetchProduct, FetchProducts, PutProduct, PutProducts, ProductsActionType } from '../actions'
 
@Injectable()
export class ProductsEffects {
  
  @Effect()
  fetchProduct$: Observable<Action> = this.actions$.pipe(
    ofType<FetchProduct>(ProductsActionType.FetchProduct),
    tap(v => console.log('fetchProduct effect', v)),
    map(data => { return {type:'fETCH_PRODUCT', id:data.payload}}),
    exhaustMap(data => {return this.productsService.product(data.id)
      .pipe(
        map(response =>{ return new PutProduct(response)})
      )})
  )
 
  constructor(
    private actions$: Actions,
    private productsService: ProductsService
  ) {}
}