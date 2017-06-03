import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'frontend-admin-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  private school_id_input: string;
  private password_input: string;
  private loggingIn: Observable<boolean>;

  constructor() { }

  ngOnInit() {
  }

  private onSubmit() {
    // this.store.dispatch(this.uiAction.startLogin(this.school_id_input, this.password_input));
  }

}
