import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CatalogRoutingModule} from './catalog-routing.module';
import {CatalogDetailComponent} from './catalog-detail/catalog-detail.component';

@NgModule({
  imports: [
    CommonModule,
    CatalogRoutingModule
  ],
  declarations: [CatalogDetailComponent]
})
export class CatalogModule {
}
