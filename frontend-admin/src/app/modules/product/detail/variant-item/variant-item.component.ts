import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductVariants, ProductVariationValues, StoreProductVariant} from "../../../../models/models";

@Component({
  selector: 'frontend-admin-variant-item',
  templateUrl: './variant-item.component.html',
  styleUrls: ['./variant-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class VariantItemComponent implements OnInit {

  @Input()
  productVariant: ProductVariants;

  @Output()
  storeProductVariantChange = new EventEmitter<StoreProductVariant>();

  @Output()
  productVariationValueChange = new EventEmitter<ProductVariationValues>();

  constructor() {
  }

  ngOnInit() {
  }

  onStoreProductVariantChange($event: StoreProductVariant) {
    this.storeProductVariantChange.emit($event);
  }

  onProductVariationValueChange($event: ProductVariationValues) {
    this.productVariationValueChange.emit($event);
  }
}
