import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CatalogRoutingModule} from './catalog-routing.module';
import {CatalogDetailComponent} from './catalog-detail/catalog-detail.component';
import {CoreModule} from '../core/core.module';
import {CatalogService} from './catalog.service';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    CatalogRoutingModule,

    CoreModule,
    SharedModule
  ],
  declarations: [CatalogDetailComponent],
  providers: [CatalogService]
})
export class CatalogModule {
}
