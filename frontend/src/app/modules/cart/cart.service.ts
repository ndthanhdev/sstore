/**
 * Created by vunguyenhung on 5/20/17.
 */


import {Injectable, Injector} from '@angular/core';
import {GenericService} from '../../generic.service';
import {Observable} from 'rxjs/Observable';
import {Cart} from '../../models/cart.model';
import {RequestOptions} from '@angular/http';

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
}

