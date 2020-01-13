import { Component, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';

import * as fromRoot from './redux/selectors/auth.selector';
import * as Actions from './redux/actions';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  authentication = false;

  constructor(private store: Store<fromRoot.AuthState>) { }

  auth = () => {
    this.store.pipe(select(fromRoot.selectAuthenticate)).subscribe(auth => {
      this.authentication = auth;
    });
  }

  login = () => {
    this.store.dispatch(new Actions.FetchLogin());
    this.auth();
  }

  logout = () => {
    this.store.dispatch(new Actions.FetchLogout());
    this.auth();
  }

  ngOnInit() {
    this.store.dispatch(new Actions.FetchAuth());
    this.auth();
  }
}
