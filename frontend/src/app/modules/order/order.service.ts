import {Injectable, Injector} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Order} from '../../models/order.model';
import {Page} from '../../models/page.model';
import {GenericService} from '../../generic.service';
import {RequestOptions} from '@angular/http';

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
}
