import {Injectable, Injector} from '@angular/core';
import {GenericService} from '../../generic.service';
import {Observable} from 'rxjs/Observable';
import {RequestOptions, Response} from '@angular/http';
import {MQTTProduct} from '../../models/mqtt-product.model';

@Injectable()
export class MqttService extends GenericService {

  constructor(injector: Injector) {
    super(injector);
    this.BASE_URL += '/mqtt/s2d';
  }

  public getProducts(products: MQTTProduct[]): Observable<Response> {
    return this.post(new RequestOptions({
      url: `${this.BASE_URL}`
    }), products);
  }

  public testCORS(): Observable<any> {
    return this.get(new RequestOptions({
      url: `http://127.0.0.1/mqtt/tests/cors`
    }));
  }

  public testPublish(): Observable<any> {
    return this.get(new RequestOptions({
      url: `http://127.0.0.1/mqtt/tests/publish`
    }));
  }

  public testSubscribe(): Observable<any> {
    return this.get(new RequestOptions({
      url: `http://127.0.0.1/mqtt/tests/subscribe`
    }));
  }

}
