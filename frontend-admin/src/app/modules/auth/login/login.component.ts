import {Component, OnInit} from '@angular/core';
import {Observable} from "rxjs/Observable";
import {Store} from "@ngrx/store";
import * as rootReducer from "../../../store/reducers/root";
import * as authActions from "../../../store/actions/auth.action";

@Component({
  selector: 'frontend-admin-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private username_input: string;
  private password_input: string;

  isBusy: Observable<boolean>;

  constructor(private store: Store<rootReducer.State>) {
  }

  ngOnInit() {
    localStorage.clear();
    this.isBusy = this.store.select(rootReducer.getAuthIsBusy);
  }

  private onSubmit() {
    this.store.dispatch(new authActions.StartLoginAction(
      {
        username: this.username_input,
        password: this.password_input
      }));
  }

}
