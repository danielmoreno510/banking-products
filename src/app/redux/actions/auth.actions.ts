import { Action } from '@ngrx/store';

export enum AuthActionType {
  FetchLogin = '[Auth] FetchLogin',
  PutLogin = '[Auth] PutLogin',
  FetchLogout = '[Auth] FetchLogout',
  PutLogout = '[Auth] PutLogout',
  FetchAuth = '[Auth] FetchAuth',
  PutAuth = '[Auth] PutAuth'
}

export class FetchLogin implements Action {
  readonly type = AuthActionType.FetchLogin;
  constructor() { }
}

export class FetchLogout implements Action {
  readonly type = AuthActionType.FetchLogout;
  constructor() { }
}

export class PutLogin implements Action {
  readonly type = AuthActionType.PutLogin;
  constructor(public payload: any) { }
}

export class PutLogout implements Action {
  readonly type = AuthActionType.PutLogout;
  constructor(public payload: any) { }
}

export class FetchAuth implements Action {
  readonly type = AuthActionType.FetchAuth;
  constructor() { }
}

export class PutAuth implements Action {
  readonly type = AuthActionType.PutAuth;
  constructor(public payload: any) { }
}

export type authActions = FetchLogin | PutLogin | FetchLogout | PutLogout | FetchAuth | PutAuth;
