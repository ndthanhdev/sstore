import {Component, Input, OnDestroy, OnInit} from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {Accounts, Users} from "../../../models/models";
import {Observable} from "rxjs/Observable";
import * as rootReducer from "../../../store/reducers/root";
import {Store} from "@ngrx/store";
import * as authAction from '../../../store/actions/auth.action';
@Component({
  selector: 'frontend-admin-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit, OnDestroy {


  account: Accounts;
  accountSub: Subscription;

  constructor(private store: Store<rootReducer.State>) {
  }

  ngOnInit() {
    this.accountSub = this.store.select(rootReducer.getAuthAccount).subscribe(account => {
      this.account = account;
    });
  }

  onLogoutButtonClick() {
    this.store.dispatch(new authAction.StartLogoutAction());
  }

  ngOnDestroy(): void {
    this.accountSub.unsubscribe();
  }

}
