/**
 * Created by vunguyenhung on 5/13/17.
 */

import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Action} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';


import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/catch';
import {of} from 'rxjs/observable/of';
import {CartService} from '../../modules/cart/cart.service';

import * as cartActions from '../actions/cart.action';

@Injectable()
export class CartEffect {


  constructor(private actions$: Actions,
              private cartService: CartService) {
  }

  @Effect()
  cartLoad$: Observable<Action> = this.actions$
    .ofType(cartActions.ActionTypes.START_CART_LOAD)
    .switchMap(action => this.cartService.loadCart(action.payload.cartId)
      .concatMap(cart => of(new cartActions.LoadCartAction({cart: cart}))));

}
