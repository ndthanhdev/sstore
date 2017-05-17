import {ChangeDetectionStrategy, Component, Input, OnDestroy} from '@angular/core';
import {Catalog} from 'app/models/catalog.model';
import {Store} from '@ngrx/store';

import * as fromRoot from '../../../store/reducers';
import * as authAction from '../../../store/actions/auth.action';
import {Observable} from 'rxjs/Observable';
import {User} from '../../../models/user.model';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'frontend-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnDestroy {

  @Input() catalogs: Catalog[];
  @Input() cartId: number;
  @Input() itemInCart: number;
  @Input() storeName: string;

  loading: Observable<boolean>;
  user: User;
  userSub: Subscription;

  constructor(private store: Store<fromRoot.State>) {
    this.loading = this.store.select(fromRoot.getAuthLoading);
    this.userSub = this.store.select(fromRoot.getAuthUser).subscribe(user => this.user = user);
  }

  ngOnDestroy(): void {
    this.userSub.unsubscribe();
  }

  onLoginButtonClick($event) {
    this.store.dispatch(new authAction.StartLoginAction({
      username: $event.username,
      password: $event.password
    }));
  }

  onLogoutButtonClick() {
    this.store.dispatch(new authAction.StartLogoutAction());
  }

}
