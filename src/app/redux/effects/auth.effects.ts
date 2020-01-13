import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { tap, map, exhaustMap } from 'rxjs/operators';
import { AuthenticationService } from '../../services/authentication.service';
import { LoginUser, LoggedUser, LogoutUser, LogoutAuth, AuthActionType, Authentication, Auth } from '../actions'
 
@Injectable()
export class AuthEffects {
  
  @Effect()
  loginAuthentication$: Observable<Action> = this.actions$.pipe(
    ofType<LoginUser>(AuthActionType.LoginUser),
    tap(v => console.log('loginUser effect', v)),
    map(() => { return {type:'LOGIN_USER'}}),
    exhaustMap(() => {return this.authenticationService.login()
      .pipe(
        map(response =>{ return new LoggedUser(response)})
      )})
  )
  
  @Effect()
  logoutAuthentication$: Observable<Action> = this.actions$.pipe(
    ofType<LogoutUser>(AuthActionType.LogoutUser),
    tap(v => console.log('logoutUser effect', v)),
    map(() => { return {type:'LOGOUT_USER'}}),
    exhaustMap(() => {return this.authenticationService.logout()
      .pipe(
        map(response =>{ return new LogoutAuth(response)})
      )})
    )

  @Effect()
  Authentication$: Observable<Action> = this.actions$.pipe(
    ofType<Authentication>(AuthActionType.Authentication),
    tap(v => console.log('authentication effect', v)),
    map(() => { return {type:'AUTHENTICATION_USER'}}),
    exhaustMap(() => {return this.authenticationService.authentication()
      .pipe(
        map(response =>{ return new Auth(response)})
      )})
    )
 
  constructor(
    private actions$: Actions,
    private authenticationService: AuthenticationService
  ) {}
}