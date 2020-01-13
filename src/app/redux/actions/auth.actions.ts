import { Action } from '@ngrx/store';

export enum AuthActionType {
  LoginUser = '[Auth] Login',
  LogoutUser = '[Auth] Logout',
  LoggedUser = '[Auth] Logged',
  LogoutAuth = '[Auth] LogoutAuth',
  Authentication = '[Auth] Authentication',
  Auth = '[Auth] Auth'
}

export class LoginUser implements Action {
  readonly type = AuthActionType.LoginUser
  constructor() {}
} 

export class LogoutUser implements Action {
  readonly type = AuthActionType.LogoutUser
  constructor() {}
}

export class LoggedUser implements Action {
  readonly type = AuthActionType.LoggedUser
  constructor(public payload: any) {}
}

export class LogoutAuth implements Action {
  readonly type = AuthActionType.LogoutAuth
  constructor(public payload: any) {}
}

export class Authentication implements Action {
  readonly type = AuthActionType.Authentication
  constructor() {}
}

export class Auth implements Action {
  readonly type = AuthActionType.Auth
  constructor(public payload: any) {}
}

export type authActions = LoginUser | LogoutUser | LoggedUser | LogoutAuth | Authentication | Auth