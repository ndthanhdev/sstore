import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output} from '@angular/core';
import {Product} from '../../../models/product.model';
import {ProductVariant} from '../../../models/product-variant.model';

@Component({
  selector: 'frontend-product-information',
  template: `
    <div class="col-lg-4 col-12 text-white d-flex align-items-center justify-content-center">
      <img [src]="product.img_url" alt="cats" class="img-thumbnail">
    </div>

    <div class="col-lg-8 col-12 p-5">

      <div class="mb-1">
        <h4 class="lead d-inline-block">{{product.name}}</h4>
        <span class="badge badge-pill badge-primary">{{product.product_type.name}}</span>
      </div>

      <p class="card-text">
        {{product.description}}
      </p>

      <div class="card">
        <div class="card-block">
          <span class="lead">Product Variants:</span>
          <!--START SORT DROPDOWN-->

          <div ngbDropdown class="d-inline-block btn-group mb-2">
            <button class="btn btn-secondary" ngbDropdownToggle>
              <frontend-product-variation-values
                [variationValues]="currentProductVariant.variation_values">
              </frontend-product-variation-values>
            </button>
            <div class="dropdown-menu">
              <button class="dropdown-item"
                      *ngFor="let productVariant of product.variants"
                      [ngClass]="{'active': productVariant.id === currentProductVariant.id}"
                      (click)="onProductVariantChange(productVariant)">
                <frontend-product-variation-values
                  [variationValues]="productVariant.variation_values">
                </frontend-product-variation-values>
              </button>
            </div>
          </div>
          <!--END SORT DROPDOWN-->
          <div class="lead mb-2">Price: <strong>{{currentProductVariant.stores[0].pivot.price | VND}}</strong></div>

          <div class="form-group mb-0 row">
            <span class="lead col-2">Quantity: </span>
            <input type="number"
                   class="form-control col-3"
                   name="amount-input"
                   [(ngModel)]="quantity">
            <span class="lead ml-2">{{product.product_type.default_unit}}</span>
          </div>

        </div>
        <div class="card-footer d-flex justify-content-end">
          <button class="btn btn-link" (click)="onResetButtonClick()">Reset</button>
          <button class="btn btn-outline-primary"
                  (click)="onPutToCartButtonClick()">
            <span class="mr-1">Put to Card</span><i class="fa fa-shopping-cart"></i>
          </button>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./product-information.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductInformationComponent implements OnInit, OnChanges {
  @Input() product: Product;

  @Output() putToCartClicked = new EventEmitter();

  currentProductVariant: ProductVariant;

  quantity = 1;

  constructor() {
  }

  ngOnChanges(): void {
    this.currentProductVariant = this.product.default_variant[0];
  }

  ngOnInit() {
  }

  onProductVariantChange(productVariant: ProductVariant) {
    this.currentProductVariant = productVariant;
  }


  onResetButtonClick() {
    this.quantity = 1;
  }

  onPutToCartButtonClick() {
    this.putToCartClicked.emit({
      quantity: this.quantity,
      price: this.currentProductVariant.stores[0].pivot.price,
      store_product_variant_id: this.currentProductVariant.stores[0].pivot.id
    });
  }
}
