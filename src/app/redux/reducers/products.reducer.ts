import { createReducer, on, createAction, props } from '@ngrx/store';

import { ProductsActionType } from '../actions';

export const initialState = {};

const productsReducer = createReducer(initialState,
  on(createAction(ProductsActionType.FetchProduct)),
  on(createAction(ProductsActionType.PutProduct, props<{ payload }>()), (state, { payload }) => payload),
  on(createAction(ProductsActionType.FetchProducts)),
  on(createAction(ProductsActionType.PutProducts, props<{ payload }>()), (state, { payload }) => payload)
);

export function ProductsReducer(state, action) {
  return productsReducer(state, action);
}
