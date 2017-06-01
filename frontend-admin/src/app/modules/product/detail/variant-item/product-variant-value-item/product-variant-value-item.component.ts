import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {ProductVariationValues} from "../../../../../models/models";

@Component({
  selector: '[frontend-admin-product-variant-value-item]',
  template: `
    <ng-template [ngIf]="!isEditing">
      <th scope="row">{{productVariationValue.id}}</th>
      <td>{{productVariationValue.name}}</td>
      <td>{{productVariationValue.value}}</td>
      <td>
        <button class="btn btn-sm btn-outline-primary" (click)="isEditing=true">Edit</button>
      </td>
    </ng-template>
    <ng-template [ngIf]="isEditing">
      <th scope="row">{{_productVariationValue.id}}</th>
      <td>{{_productVariationValue.name}}</td>
      <td><input type="text"
                 class="form-control"
                 #value="ngModel"
                 [(ngModel)]="_productVariationValue.value"></td>
      <td>
        <button class="btn btn-sm btn-outline-success" (click)="onSave()">Save</button>
      </td>
    </ng-template>
  `,
  styleUrls: ['./product-variant-value-item.component.scss']
})
export class ProductVariantValueItemComponent implements OnInit, OnChanges {


  @Input()
  productVariationValue: ProductVariationValues;

  @Output()
  productVariationValueSaved = new EventEmitter<ProductVariationValues>();

  isEditing: boolean;

  private _productVariationValue: ProductVariationValues;

  constructor() {
    this.isEditing = false;
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this._productVariationValue = Object.assign({}, this.productVariationValue);
  }

  private onSave() {
    this.isEditing = false;
    this.productVariationValueSaved.emit(this._productVariationValue);
  }

}
