import {Injectable, Injector} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Order} from '../../models/order.model';
import {Page} from '../../models/page.model';
import {GenericService} from '../../generic.service';
import {RequestOptions, Response} from '@angular/http';

@Injectable()
export class OrderService extends GenericService {

  constructor(injector: Injector) {
    super(injector);
    this.BASE_URL += '/orders';
  }

  public loadOrders(page: number): Observable<Page<Order>> {
    return this.getWithAuth(new RequestOptions({
      url: `${this.BASE_URL}?page=${page}`
    }));
  }

  loadOrder(orderId: number): Observable<Order> {
    return this.getWithAuth(new RequestOptions({
      url: `${this.BASE_URL}/${orderId}`
    }));
  }

  closeOrder(orderId: number): Observable<Order> {
    return this.patchWithAuth(new RequestOptions({
      url: `${this.BASE_URL}/${orderId}/done`
    }));
  }

  createOrder(cartId: number): Observable<number> {
    return this.postWithAuth(new RequestOptions({url: `${this.BASE_URL}`}), {cartId: cartId}).map(response => response.json().id);
  }

  deliveringOnlineOrder(orderId: number, address: string, latitude: string, longitude: string, tel: string): Observable<Response> {
    return this.patchWithAuth(
      new RequestOptions({url: `${this.BASE_URL}/${orderId}/delivery/online`}),
      {
        address: address || '',
        latitude: latitude || '',
        longitude: longitude || '',
        tel: tel
      });
  }

}
