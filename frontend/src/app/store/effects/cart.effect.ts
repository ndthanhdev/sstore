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
import * as layoutActions from '../actions/layout.action';
import {CheckoutProgress} from '../../models/checkout-progress.model';

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

  @Effect()
  activeCartLoad$: Observable<Action> = this.actions$
    .ofType(cartActions.ActionTypes.START_ACTIVE_CART_LOAD)
    .switchMap(action => this.cartService.loadActiveCart()
      .concatMap(activeCart => of(new cartActions.LoadActiveCartAction({activeCart: activeCart}))));

  @Effect()
  cartProductAdd$: Observable<Action> = this.actions$
    .ofType(cartActions.ActionTypes.START_PRODUCT_ADD)
    .switchMap(action => this.cartService.addProduct(action.payload.cartDetail)
      .concatMap(cart => of(new cartActions.AddProductAction({cartDetail: action.payload.cartDetail}))));

  @Effect()
  CartProductDelete$: Observable<Action> = this.actions$
    .ofType(cartActions.ActionTypes.START_PRODUCT_DELETE)
    .switchMap(action => this.cartService.deleteProduct(action.payload.cartId, action.payload.cartDetailId)
      .concatMap(cart => of(new cartActions.DeleteProductAction({cartDetailId: action.payload.cartDetailId}))));

  @Effect()
  CartClose$: Observable<Action> = this.actions$
    .ofType(cartActions.ActionTypes.START_CART_CLOSE)
    .switchMap(action => this.cartService.closeCart()
      .concatMap(cart => Observable.from([
        new cartActions.CloseCartAction(),
        new layoutActions.SetCheckoutProgressAction({checkoutProgress: CheckoutProgress.NEW_ORDER})
      ])));

  @Effect()
  CartCreate$: Observable<Action> = this.actions$
    .ofType(cartActions.ActionTypes.START_CART_CREATE)
    .switchMap(action => this.cartService.createCart()
      .concatMap(createdCartId => Observable.from([
        new cartActions.CreateCartAction({createdCartId: createdCartId}),
        new cartActions.StartActiveCartLoadAction(),
        new layoutActions.SetCheckoutProgressAction({checkoutProgress: CheckoutProgress.DONE})
      ])));

}
