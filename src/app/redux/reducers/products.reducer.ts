import { createReducer, on, createAction, props } from '@ngrx/store';

import { ProductsActionType } from '../actions';

export const initialState = {};

const pReducer = createReducer(initialState,
  on(createAction(ProductsActionType.FetchProduct)),
  on(createAction(ProductsActionType.PutProduct, props<{ payload }>()), (state, { payload }) => payload),
  on(createAction(ProductsActionType.FetchProducts)),
  on(createAction(ProductsActionType.PutProducts, props<{ payload }>()), (state, { payload }) => payload)
);

export function productsReducer(state, action) {
  return pReducer(state, action);
}
