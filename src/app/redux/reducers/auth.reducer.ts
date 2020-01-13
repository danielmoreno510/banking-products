import { createReducer, on, createAction, props } from '@ngrx/store';

import { AuthActionType } from '../actions';

export const initialState = {
  authentication: false
};
 
const _authReducer = createReducer(initialState,
  on(createAction(AuthActionType.Authentication)),
  on(createAction(AuthActionType.Auth, props<{payload}>()), (state, {payload}) => payload ),
  on(createAction(AuthActionType.LoginUser)),
  on(createAction(AuthActionType.LogoutUser)),
  on(createAction(AuthActionType.LoggedUser, props<{payload}>()), (state, {payload}) => payload ),
  on(createAction(AuthActionType.LogoutAuth, props<{payload}>()), (state, {payload}) => payload )
);
 
export function authReducer(state, action) {
  return _authReducer(state, action);
}