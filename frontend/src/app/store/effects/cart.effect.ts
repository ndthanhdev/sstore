/**
 * Created by vunguyenhung on 5/13/17.
 */

import {Injectable} from '@angular/core';
import {Actions, Effect} from '@ngrx/effects';
import {Action, Store} from '@ngrx/store';
import {Observable} from 'rxjs/Observable';


import 'rxjs/add/operator/concatMap';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/take';
import {of} from 'rxjs/observable/of';
import {CartService} from '../../modules/cart/cart.service';

import {CheckoutProgress} from '../../models/checkout-progress.model';

import * as cartActions from '../actions/cart.action';
import * as layoutActions from '../actions/layout.action';
import * as fromRoot from '../reducers';

@Injectable()
export class CartEffect {


  constructor(private actions$: Actions,
              private cartService: CartService,
              private store: Store<fromRoot.State>) {
  }

  @Effect()
  cartLoad$: Observable<Action> = this.actions$
    .ofType(cartActions.ActionTypes.START_CART_LOAD)
    .switchMap(action => this.cartService.loadCart(action.payload.cartId)
      .concatMap(cart => of(new cartActions.LoadCartAction({cart: cart}))));

  @Effect()
  localCartLoad$: Observable<Action> = this.actions$
    .ofType(cartActions.ActionTypes.START_LOCAL_CART_LOAD)
    .switchMap(action => this.cartService.loadLocalCart()
      .concatMap(cart => of(new cartActions.LoadLocalCartAction({cart: cart}))));

  @Effect()
  activeCartLoad$: Observable<Action> = this.actions$
    .ofType(cartActions.ActionTypes.START_ACTIVE_CART_LOAD)
    .switchMap(action => this.cartService.loadActiveCart()
      .concatMap(activeCart => of(new cartActions.LoadActiveCartAction({activeCart: activeCart}))));

  @Effect()
  localActiveCartLoad$: Observable<Action> = this.actions$
    .ofType(cartActions.ActionTypes.START_LOCAL_ACTIVE_CART_LOAD)
    .switchMap(action => this.cartService.loadLocalActiveCart()
      .concatMap(activeCart => of(new cartActions.LoadLocalActiveCartAction({activeCart: activeCart}))));

  @Effect()
  cartProductAdd$: Observable<Action> = this.actions$
    .ofType(cartActions.ActionTypes.START_PRODUCT_ADD)
    .switchMap(action => this.cartService.addProduct(action.payload.cartDetail)
      .concatMap(cart => of(new cartActions.AddProductAction({cartDetail: action.payload.cartDetail}))));

  @Effect()
  cartMerge$: Observable<Action> = this.actions$
    .ofType(cartActions.ActionTypes.START_CART_MERGE)
    .map(action => action.payload)
    .combineLatest(this.store.select(fromRoot.getCartActiveCart))
    .take(2)
    .filter(([payload, activeCart]) => !!activeCart.id)
    .switchMap(([payload, activeCart]) => this.cartService.mergeCart(payload.cartDetails, activeCart.id)
      .concatMap(cart => of(new cartActions.MergeCartAction({cartDetails: payload.cartDetails}))));

  @Effect()
  cartLocalProductAdd$: Observable<Action> = this.actions$
    .ofType(cartActions.ActionTypes.START_LOCAL_PRODUCT_ADD)
    .switchMap(action => this.cartService.addLocalProduct(action.payload.cartDetail)
      .concatMap(cart => of(new cartActions.AddLocalProductAction({cartDetail: action.payload.cartDetail}))));

  @Effect()
  cartProductDelete$: Observable<Action> = this.actions$
    .ofType(cartActions.ActionTypes.START_PRODUCT_DELETE)
    .switchMap(action => this.cartService.deleteProduct(action.payload.cartId, action.payload.cartDetailId)
      .concatMap(cart => of(new cartActions.DeleteProductAction({
        cartDetailId: action.payload.cartDetailId,
        quantity: action.payload.quantity
      }))));

  @Effect()
  cartLocalProductDelete$: Observable<Action> = this.actions$
    .ofType(cartActions.ActionTypes.START_LOCAL_PRODUCT_DELETE)
    .switchMap(action => this.cartService.deleteLocalProduct(action.payload.cartDetailId)
      .concatMap(cart => of(new cartActions.DeleteLocalProductAction({
        cartDetailId: action.payload.cartDetailId,
        quantity: action.payload.quantity
      }))));

  @Effect()
  cartDetailQuantityEdit$: Observable<Action> = this.actions$
    .ofType(cartActions.ActionTypes.START_CART_DETAIL_QUANTITY_EDIT)
    .map(action => action.payload)
    .switchMap(payload => this.cartService.editCartDetailQuantity(payload.cartId, payload.cartDetailId, payload.quantity)
      .concatMap(cart => of(new cartActions.EditCartDetailQuantityAction({
        cartDetailId: payload.cartDetailId,
        quantity: payload.quantity,
        quantityOffset: payload.quantityOffset
      }))));

  @Effect()
  localCartDetailQuantityEdit$: Observable<Action> = this.actions$
    .ofType(cartActions.ActionTypes.START_LOCAL_CART_DETAIL_QUANTITY_EDIT)
    .map(action => action.payload)
    .switchMap(payload => this.cartService.editLocalCartDetailQuantity(payload.cartDetailId, payload.quantity)
      .concatMap(cart => of(new cartActions.EditLocalCartDetailQuantityAction({
        cartDetailId: payload.cartDetailId,
        quantity: payload.quantity,
        quantityOffset: payload.quantityOffset
      }))));

  @Effect()
  cartClose$: Observable<Action> = this.actions$
    .ofType(cartActions.ActionTypes.START_CART_CLOSE)
    .switchMap(action => this.cartService.closeCart()
      .concatMap(cart => Observable.from([
        new cartActions.CloseCartAction(),
        new layoutActions.SetCheckoutProgressAction({checkoutProgress: CheckoutProgress.NEW_ORDER})
      ])));

  @Effect()
  cartCreate$: Observable<Action> = this.actions$
    .ofType(cartActions.ActionTypes.START_CART_CREATE)
    .switchMap(action => this.cartService.createCart()
      .concatMap(createdCartId => Observable.from([
        new cartActions.CreateCartAction({createdCartId: createdCartId}),
        new cartActions.StartActiveCartLoadAction(),
        new layoutActions.SetCheckoutProgressAction({checkoutProgress: CheckoutProgress.DONE})
      ])));

}
