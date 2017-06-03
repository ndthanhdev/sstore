import {Component, Input, OnDestroy} from '@angular/core';
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
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnDestroy {
  @Input() catalogs: Catalog[];
  @Input() currentStore;

  authLoading: Observable<boolean>;

  activeCart: ActiveCart;
  activeCartSub: Subscription;

  cartLoading: boolean;
  cartLoadingSub: Subscription;

  user: User;
  userSub: Subscription;

  constructor(private store: Store<fromRoot.State>) {
    this.authLoading = this.store.select(fromRoot.getAuthLoading);
    this.activeCartSub = this.store.select(fromRoot.getCartActiveCart).subscribe(activeCart => this.activeCart = activeCart);
    this.cartLoadingSub = this.store.select(fromRoot.getCartLoading).subscribe(cartLoading => this.cartLoading = cartLoading);
    this.userSub = this.store.select(fromRoot.getAuthUser).subscribe(user => this.user = user);
  }

  ngOnDestroy(): void {
    this.activeCartSub.unsubscribe();
    this.cartLoadingSub.unsubscribe();
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
