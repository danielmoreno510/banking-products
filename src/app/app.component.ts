import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as fromRoot from './redux/selectors/auth.selector';
import * as Actions from './redux/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  authentication=false

  constructor(private store: Store<fromRoot.AuthState>) {
  }

  auth = () => {
    this.store.pipe(select(fromRoot.selectAuthenticate)).subscribe(auth => {
      this.authentication=auth;
    });
  }

  onLogin = () => {
    this.store.dispatch(new Actions.LoginUser());
    this.auth()
  }

  onLogout = () => {
    this.store.dispatch(new Actions.LogoutUser());
    this.auth()
  }
  
  ngOnInit(){
    this.store.dispatch(new Actions.Authentication());
    this.auth()
  }
}
