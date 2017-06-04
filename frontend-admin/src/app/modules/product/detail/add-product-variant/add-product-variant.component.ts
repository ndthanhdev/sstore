import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {
  ProductTypeAttributes, ProductVariants, ProductVariationValues, StoreProductVariant,
  Stores
} from "../../../../models/models";

@Component({
  selector: 'frontend-admin-add-product-variant',
  template: `
    <div class="card-header d-flex">
      <span class="lead mr-2">#</span>
      <button class="btn btn-sm btn-danger ml-auto" (click)="cancel.emit()"><i class="fa fa-times"></i></button>
    </div>

    <div class="card-block">
      <div class="row">
        <div class="col-lg-6 col-12">
          <p class="lead">Variation Values:</p>
          <table class="table table-hover">
            <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Value</th>
              <th>Action</th>
            </tr>
            </thead>
            <tbody>
            </tbody>
          </table>
        </div>
        <!---->
        <div class="col-lg-6 col-12 mb-3">
          <p class="lead">Availability:</p>
          <table class="table table-hover">
            <thead>
            <tr>
              <th>#</th>
              <th>Store name</th>
              <th>Price</th>
              <th>In stock</th>
              <th>Action</th>
            </tr>
            </thead>
            <tbody>
            <tr frontend-admin-add-store-product-variant 
                *ngFor="let spv of storeProductVariant"
            [storeProductVariant]="spv"></tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./add-product-variant.component.scss']
})
export class AddProductVariantComponent implements OnInit, OnChanges {


  productVariant: ProductVariants = {};

  @Input()
  stores: Stores[];

  @Output()
  cancel = new EventEmitter();

  productVariationValues: ProductVariationValues[];
  storeProductVariant: StoreProductVariant[];

  constructor() {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.storeProductVariant = this.stores.map(store => {
      let spv: StoreProductVariant = {
        store: store
      };
      return spv;
    });
  }
}
