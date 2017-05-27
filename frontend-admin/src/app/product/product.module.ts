import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductRoutingModule } from './product-routing.module';
import { DetailComponent } from './detail/detail.component';
import { ProductComponent } from './product/product.component';
import { CreateComponent } from './create/create.component';
import {SharedModule} from "../shared/shared.module";

@NgModule({
  imports: [
    CommonModule,
    ProductRoutingModule,
    SharedModule,
  ],
  declarations: [ DetailComponent, ProductComponent, CreateComponent]
})
export class ProductModule { }
