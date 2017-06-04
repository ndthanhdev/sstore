import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ProductRoutingModule} from './product-routing.module';
import {DetailComponent} from './detail/detail.component';
import {ProductComponent} from './product/product.component';
import {CreateComponent} from './create/create.component';
import {SharedModule} from "../shared/shared.module";
import {ProductItemComponent} from './product/product-item/product-item.component';
import {ProductService} from "./product.service";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {MomentModule} from "angular2-moment";
import { VariantItemComponent } from './detail/variant-item/variant-item.component';
import { StoreProductVariantItemComponent } from './detail/variant-item/store-product-variant-item/store-product-variant-item.component';
import {FormsModule} from "@angular/forms";
import { ProductTypeAttributeValueItemComponent } from './detail/product-type-attribute-value-item/product-type-attribute-value-item.component';
import {CustomAttributeItemComponent} from "./detail/custom-attribute-item/custom-attribute-item.component";
import { ProductVariantValueItemComponent } from './detail/variant-item/product-variant-value-item/product-variant-value-item.component';
import { AddCustomAttributeComponent } from './detail/add-custom-attribute/add-custom-attribute.component';

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule,
    NgbModule,
    MomentModule,
    FormsModule
  ],
  declarations: [
    DetailComponent,
    ProductComponent,
    CreateComponent,
    ProductItemComponent,
    VariantItemComponent,
    StoreProductVariantItemComponent,
    ProductTypeAttributeValueItemComponent,
    CustomAttributeItemComponent,
    ProductVariantValueItemComponent,
    AddCustomAttributeComponent
  ],
  providers: [
    ProductService
  ]
})
export class ProductModule {
}
