import { createSelector } from '@ngrx/store';
 
export interface Authentication {
  authentication: boolean;
}
 
export interface AuthState {
  auth: Authentication;
}
 
export const selectAuth = (state: AuthState) => state.auth;
 
export const selectAuthenticate = createSelector(
  selectAuth,
  (state: Authentication) => {return state.authentication}
);