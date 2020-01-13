import { createReducer, on, createAction, props } from '@ngrx/store';

import { AuthActionType } from '../actions';

export const initialState = {
  authentication: false
};

const aReducer = createReducer(
  initialState,
  on(createAction(AuthActionType.FetchAuth)),
  on(createAction(AuthActionType.PutAuth, props<{ payload }>()), (state, { payload }) => payload),
  on(createAction(AuthActionType.FetchLogin)),
  on(createAction(AuthActionType.PutLogin, props<{ payload }>()), (state, { payload }) => payload),
  on(createAction(AuthActionType.FetchLogout)),
  on(createAction(AuthActionType.PutLogout, props<{ payload }>()), (state, { payload }) => payload)
);

export function authReducer(state, action) {
  return aReducer(state, action);
}
