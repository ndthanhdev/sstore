import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductRoutingModule} from './product-routing.module';
import {DetailComponent} from './detail/detail.component';
import {ProductComponent} from './product/product.component';
import {CreateComponent} from './create/create.component';
import {SharedModule} from "../shared/shared.module";
import {ProductItemComponent} from './product-item/product-item.component';
import {ProductService} from "./product.service";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule,
    NgbModule
  ],
  declarations: [DetailComponent, ProductComponent, CreateComponent, ProductItemComponent],
  providers: [ProductService]
})
export class ProductModule {
}
