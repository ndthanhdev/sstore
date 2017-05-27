import {GenericService} from '../../generic.service';
import {Injectable, Injector} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {Catalog} from '../../models/catalog.model';
/**
 * Created by vunguyenhung on 5/13/17.
 */


@Injectable()
export class CatalogService extends GenericService {
  constructor(injector: Injector) {
    super(injector);
    this.BASE_URL += '/catalogs';
  }

  public loadAllCatalog(): Observable<Catalog[]> {
    return this.get();
  }
}
