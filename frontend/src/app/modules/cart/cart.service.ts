/**
 * Created by vunguyenhung on 5/20/17.
 */


import {Injectable, Injector} from '@angular/core';
import {GenericService} from '../../generic.service';
import {Observable} from 'rxjs/Observable';
import {ActiveCart, Cart} from '../../models/cart.model';
import {RequestOptions} from '@angular/http';
import {CartDetail} from '../../models/cart-detail.model';
import {LOCAL_STORAGE_CART} from '../../util/app.constants';

@Injectable()
export class CartService extends GenericService {
  constructor(injector: Injector) {
    super(injector);
    this.BASE_URL += '/carts';
  }

  public loadCart(cartId: number): Observable<Cart> {
    return this.get(new RequestOptions({
      url: `${this.BASE_URL}/${cartId}`
    }));
  }

  public loadLocalCart(): Observable<Cart> {
    const cartString = localStorage.getItem(LOCAL_STORAGE_CART);
    if (cartString != null) {
      return Observable.of(JSON.parse(cartString));
    } else {
      return Observable.of(new Cart());
    }
  }

  public deleteProduct(cartId: number, cartDetailId: number): Observable<Response> {
    return this.deleteWithAuth(new RequestOptions({
      url: `${this.BASE_URL}/${cartId}/details/${cartDetailId}`
    }));
  }

  public closeCart(): Observable<Response> {
    return this.patchWithAuth(new RequestOptions({
      url: `${this.BASE_URL}/inactive`
    }));
  }

  public createCart(): Observable<number> {
    return this.postWithAuth().map(resp => resp.json().id);
  }

  public loadActiveCart(): Observable<ActiveCart> {
    return this.getWithAuth();
  }

  public loadLocalActiveCart(): Observable<ActiveCart> {
    const cartString = localStorage.getItem(LOCAL_STORAGE_CART);

    if (cartString != null) {
      const cart: Cart = JSON.parse(cartString);
      const itemCount = cart.details.reduce((pre, curr) => pre + curr.quantity, 0);
      return Observable.of({item_count: itemCount});
    } else {
      return Observable.of({item_count: 0});
    }
  }

  public addProduct(cartDetail: CartDetail): Observable<Response> {
    return this.post(new RequestOptions({url: `${this.BASE_URL}/${cartDetail.shopping_cart_id}/details`}), {
      quantity: cartDetail.quantity,
      price: cartDetail.price,
      store_product_variant_id: cartDetail.store_product_variant_id
    });
  }

  public addLocalProduct(cartDetail: CartDetail): Observable<any> {
    const cartString = localStorage.getItem(LOCAL_STORAGE_CART);

    let cart: Cart;
    let cartAfterUpdate: Cart;

    if (cartString != null) {
      cart = JSON.parse(cartString);

      const existingCartDetailIndex = cart.details.findIndex(cd => cd.store_product_variant_id === cartDetail.store_product_variant_id);
      let cartDetailAfterUpdate: CartDetail[];

      if (existingCartDetailIndex !== -1) {
        cartDetailAfterUpdate = cart.details.map((detail, index) => {
          if (index === existingCartDetailIndex) {
            return Object.assign({}, detail, {
              quantity: detail.quantity + cartDetail.quantity
            });
          } else {
            return detail;
          }
        });
      } else {
        cartDetailAfterUpdate = [
          ...cart.details,
          cartDetail
        ];
      }

      cartAfterUpdate = Object.assign({}, cart, {
        details: cartDetailAfterUpdate
      });
    } else {
      cart = new Cart();
      cartAfterUpdate = Object.assign({}, cart, {
        details: [cartDetail]
      });
    }

    localStorage.setItem(LOCAL_STORAGE_CART, JSON.stringify(cartAfterUpdate));

    return Observable.of('Save successfully!');
  }


  public editCartDetailQuantity(cartId: number, cartDetailId: number, quantity: number): Observable<Response> {
    return this.patchWithAuth(new RequestOptions({url: `${this.BASE_URL}/${cartId}/details/${cartDetailId}`}), {
      quantity: quantity,
    });
  }
}

