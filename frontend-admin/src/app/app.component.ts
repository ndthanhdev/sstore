import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {Store} from "@ngrx/store";
import * as rootReducer from "./store/reducers/root";
import {JwtHelper} from "angular2-jwt";
import {AppConstants, JwtPayLoadKeys} from "./util/constant";
import * as authAction from "./store/actions/auth.action";

@Component({
  selector: 'frontend-admin-root',
  template: `
    <frontend-admin-nav-bar *ngIf="isOnLoginPage()"></frontend-admin-nav-bar>
    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  constructor(private router: Router,
              private store: Store<rootReducer.State>,
              private jwtHelper: JwtHelper) {

  }

  ngOnInit(): void {
    let token = localStorage.getItem(AppConstants.TokenName);
    if (token && !this.jwtHelper.isTokenExpired(token)) {
      let id = this.jwtHelper.decodeToken(token)[JwtPayLoadKeys.AccountId];
      this.store.dispatch(new authAction.StartLoggedAccountLoadAction({id: id}));
    }
    else {
      this.store.dispatch(new authAction.StartLogoutAction());
    }
  }

  private isOnLoginPage(): boolean {
    return this.router.routerState.snapshot.url != '/auth/login'
  }

}
