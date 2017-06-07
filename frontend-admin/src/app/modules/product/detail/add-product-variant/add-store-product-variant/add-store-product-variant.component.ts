import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {StoreProductVariant} from "../../../../../models/models";

@Component({
  selector: '[frontend-admin-add-store-product-variant]',
  templateUrl: './add-store-product-variant.component.html',
  styleUrls: ['./add-store-product-variant.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddStoreProductVariantComponent implements OnInit {

  @Input()
  storeProductVariant: any;

  constructor() {
  }

  ngOnInit() {
  }

}
