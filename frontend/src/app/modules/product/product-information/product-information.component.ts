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
                [variationValues]="currentProductVariant?.variation_values">
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
          <div class="lead mb-2">
            <span>Price: <strong>{{currentProductVariant.stores[0].pivot.price | VND}}</strong></span>
            <span class="mx-2">-</span>
            <span>In Stock: <strong>{{currentProductVariant.stores[0].pivot.in_stock}}</strong></span>
          </div>

          <div class="form-group mb-0 row"
               [ngClass]="{'has-danger': quantityInput.value < 1 || quantityInput.value > currentProductVariant.stores[0].pivot.in_stock}">
            <span class="lead col-2">Quantity: </span>
            <input type="number" class="form-control col-3"
                   min="1"
                   [max]="currentProductVariant.stores[0].pivot.in_stock"
                   [(ngModel)]="quantity"
                   #quantityInput>
            <span class="lead ml-2">{{product.product_type.default_unit}}</span>
          </div>

        </div>
        <div class="card-footer d-flex justify-content-end">
          <button class="btn btn-link" (click)="onResetButtonClick()">Reset</button>
          <button class="btn btn-outline-primary"
                  [disabled]="quantityInput.value < 1 || quantityInput.value > currentProductVariant.stores[0].pivot.in_stock"
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
      store_product_variant_id: this.currentProductVariant.stores[0].pivot.id,
      store_product_variant: {
        price: this.currentProductVariant.stores[0].pivot.price,
        in_stock: this.currentProductVariant.stores[0].pivot.in_stock,
        product_variant: Object.assign({}, this.currentProductVariant, {
          product: {
            name: this.product.name,
            img_url: this.product.img_url
          }
        })
      }
    });
  }
}
