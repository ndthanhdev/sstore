import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductVariants, StoreProductVariant} from "../../../../models/models";

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
  storeProductVariantSaved = new EventEmitter<StoreProductVariant>();

  constructor() {
  }

  ngOnInit() {
  }

  onStoreProductVariantSave($event:StoreProductVariant){
    this.storeProductVariantSaved.emit($event);
  }

}
