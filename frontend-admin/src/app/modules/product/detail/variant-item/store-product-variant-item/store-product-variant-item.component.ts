import {
  ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output,
  SimpleChanges
} from '@angular/core';
import {StoreProductVariant} from "../../../../../models/models";

@Component({
  selector: '[frontend-admin-store-product-variant-item]',
  templateUrl: './store-product-variant-item.component.html',
  styleUrls: ['./store-product-variant-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StoreProductVariantItemComponent implements OnInit, OnChanges {


  @Input()
  storeProductVariant: StoreProductVariant;

  @Output()
  storeProductVariantSaved = new EventEmitter<StoreProductVariant>();

  isEditing: boolean;
  private _storeProductVariant: StoreProductVariant;

  t:any;

  constructor() {
    this.isEditing = false;
  }

  ngOnInit() {
  }

  private onSave() {
    this.isEditing = false;
    this.storeProductVariantSaved.emit(this._storeProductVariant);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this._storeProductVariant = Object.assign({}, this.storeProductVariant);
  }

}
