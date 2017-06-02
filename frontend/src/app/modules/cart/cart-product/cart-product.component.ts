import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {CartDetail} from '../../../models/cart-detail.model';

@Component({
  selector: 'frontend-cart-product',
  template: `
    <div class="row">
      <div class="col-8">

        <div class="row">
          <!--START PRODUCT IMAGE-->
          <div class="col-lg-4 col-12 text-white d-flex align-items-center justify-content-center">
            <img [src]="detail.store_product_variant.product_variant.product.img_url"
                 alt="cats"
                 class="img-thumbnail">
          </div>
          <!--END PRODUCT IMAGE-->

          <!--START PRODUCT INFO-->
          <div class="col-lg-8 col-12">
            <div class="mb-1">
              <h4 class="lead d-inline-block"><strong>Name: </strong>{{detail?.store_product_variant.product_variant.product.name}}</h4>
              <button class="btn btn-outline-danger btn-sm float-right" (click)="onDeleteButtonClick()">Delete</button>
            </div>

            <div class="mb-2">
              <span class="lead"><strong>Variation Values:</strong></span>
              <table class="table table-hover">
                <thead>
                <tr>
                  <th>Name</th>
                  <th>Value</th>
                </tr>
                </thead>
                <tbody>
                <tr *ngFor="let variationValue of detail?.store_product_variant.product_variant.variation_values">
                  <td>{{variationValue.name}}</td>
                  <td>{{variationValue.value}}</td>
                </tr>
                </tbody>
              </table>
            </div>
          </div>
          <!--END PRODUCT INFO-->

        </div>
      </div>
      <div class="col-2">
        <span class="lead">{{detail?.store_product_variant.price | VND}}</span>
      </div>

      <div class="col-2">
        <div class="form-group mb-0 row"
             [ngClass]="{'has-danger': quantityInput.value < 1}">
          <input type="number"
                 class="form-control col-8"
                 min="1"
                 #quantityInput="ngModel"
                 [(ngModel)]="quantity"
                 [disabled]="modifying"
                 (keydown.enter)="onCartDetailEdit()"
                 (focus)="onCartDetailFocus()"
                 (focusout)="onCartDetailEdit()"
                 (keydown.esc)="onCartDetailExit()">
        </div>
      </div>
    </div>
    <hr>
  `,
  styleUrls: ['./cart-product.component.scss']
})
export class CartProductComponent implements OnInit {
  @Input() detail: CartDetail;
  @Input() modifying: boolean;

  @Output() deleteButtonClicked = new EventEmitter();
  @Output() cartDetailQuantityEdited = new EventEmitter();

  quantity: number;

  backupQuantity: number;

  ngOnInit() {
    if (this.detail) {
      this.backupQuantity = this.quantity = this.detail.quantity;
    }
  }

  onDeleteButtonClick() {
    this.deleteButtonClicked.emit({cartDetailId: this.detail.id, quantity: this.detail.quantity});
  }

  onCartDetailEdit() {
    if (this.quantity >= 1) {
      if (this.quantity !== this.backupQuantity) {
        this.cartDetailQuantityEdited.emit({
          cartId: this.detail.shopping_cart_id,
          cartDetailId: this.detail.id,
          quantity: this.quantity,
          quantityOffset: this.quantity - this.backupQuantity
        });
      }
    } else {
      this.quantity = 1;
    }
  }

  onCartDetailFocus() {
    this.backupQuantity = this.quantity;
  }

  onCartDetailExit() {
    this.quantity = this.backupQuantity;
  }

}
