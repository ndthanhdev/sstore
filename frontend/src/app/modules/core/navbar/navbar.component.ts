import {ChangeDetectionStrategy, Component, Input, OnDestroy} from '@angular/core';
import {Catalog} from 'app/models/catalog.model';
import {Store} from '@ngrx/store';

import * as fromRoot from '../../../store/reducers';
import * as authAction from '../../../store/actions/auth.action';
import {Observable} from 'rxjs/Observable';
import {Subscription} from 'rxjs/Subscription';
import {ActiveCart} from '../../../models/cart.model';
import {User} from '../../../models/user.model';

@Component({
  selector: 'frontend-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NavbarComponent implements OnDestroy {
  @Input() catalogs: Catalog[];
  @Input() currentStore;

  loading: Observable<boolean>;
  activeCart: ActiveCart;
  activeCartSub: Subscription;

  user: User;
  userSub: Subscription;

  constructor(private store: Store<fromRoot.State>) {
    this.loading = this.store.select(fromRoot.getAuthLoading);
    this.activeCartSub = this.store.select(fromRoot.getCartActiveCart).subscribe(activeCart => this.activeCart = activeCart);
    this.userSub = this.store.select(fromRoot.getAuthUser).subscribe(user => this.user = user);
  }

  ngOnDestroy(): void {
    this.activeCartSub.unsubscribe();
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
