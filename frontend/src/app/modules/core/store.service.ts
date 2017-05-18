import {Injectable, Injector} from '@angular/core';
import {GenericService} from 'app/generic.service';
import {Observable} from 'rxjs/Observable';
import {Store} from '../../models/store.model';
import {RequestOptions} from '@angular/http';
/**
 * Created by vunguyenhung on 5/18/17.
 */

@Injectable()
export class StoreService extends GenericService {
  constructor(injector: Injector) {
    super(injector);
    this.BASE_URL += '/stores';
  }

  public loadPrimaryStore(): Observable<Store> {
    return this.get(new RequestOptions({
      url: `${this.BASE_URL}/primary`
    }));
  }
}
