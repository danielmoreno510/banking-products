import { createReducer, on, createAction, props } from '@ngrx/store';

import { ProductsActionType } from '../actions';

export const initialState = {}
 
const _productsReducer = createReducer(initialState,
  on(createAction(ProductsActionType.FetchProduct)),
  on(createAction(ProductsActionType.PutProduct, props<{payload}>()), (state, {payload}) => payload )
);
 
export function ProductsReducer(state, action) {
  return _productsReducer(state, action);
}