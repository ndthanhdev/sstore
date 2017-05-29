/**
 * Created by vunguyenhung on 5/20/17.
 */


import {Injectable, Injector} from '@angular/core';
import {GenericService} from '../../generic.service';
import {Observable} from 'rxjs/Observable';
import {ActiveCart, Cart} from '../../models/cart.model';
import {RequestOptions} from '@angular/http';
import {CartDetail} from '../../models/cart-detail.model';

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


  public addProduct(cartDetail: CartDetail): Observable<Response> {
    return this.post(new RequestOptions({url: `${this.BASE_URL}/${cartDetail.shopping_cart_id}/details`}), {
      quantity: cartDetail.quantity,
      price: cartDetail.price,
      store_product_variant_id: cartDetail.store_product_variant_id
    });
  }
}

