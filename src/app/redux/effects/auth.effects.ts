import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, ofType, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs';
import { tap, map, exhaustMap } from 'rxjs/operators';
import { AuthenticationService } from '../../services/authentication.service';
import { FetchLogin, PutLogin, FetchLogout, PutLogout, AuthActionType, FetchAuth, PutAuth } from '../actions';

@Injectable()
export class AuthEffects {

  @Effect()
  loginAuthentication$: Observable<Action> = this.actions$.pipe(
    ofType<FetchLogin>(AuthActionType.FetchLogin),
    tap(v => console.log('loginUser effect', v)),
    map(() => ({type: 'LOGIN_USER'})),
    exhaustMap(() => this.authenticationService.login()
      .pipe(
        map(response => new PutLogin(response))
      ))
  );

  @Effect()
  logoutAuthentication$: Observable<Action> = this.actions$.pipe(
    ofType<FetchLogout>(AuthActionType.FetchLogout),
    tap(v => console.log('logoutUser effect', v)),
    map(() => ({type: 'LOGOUT_USER'})),
    exhaustMap(() => this.authenticationService.logout()
      .pipe(
        map(response => new PutLogout(response))
      ))
  );

  @Effect()
  Authentication$: Observable<Action> = this.actions$.pipe(
    ofType<FetchAuth>(AuthActionType.FetchAuth),
    tap(v => console.log('authentication effect', v)),
    map(() => ({type: 'AUTHENTICATION_USER'})),
    exhaustMap(() => this.authenticationService.authentication()
      .pipe(
        map(response => new PutAuth(response))
      ))
  );

  constructor(
    private actions$: Actions,
    private authenticationService: AuthenticationService
  ) { }
}
