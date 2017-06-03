import {Component, Input, OnInit} from '@angular/core';
import {Subscription} from "rxjs/Subscription";
import {Users} from "../../../models/models";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'frontend-admin-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @Input()
  username:string;

  @Input()
  fullName:string;

  authLoading: Observable<boolean>;

  user: Users;
  userSub: Subscription;

  constructor() { }

  ngOnInit() {
  }

  onLogoutButtonClick() {
    // this.store.dispatch(new authAction.StartLogoutAction());
  }

}
