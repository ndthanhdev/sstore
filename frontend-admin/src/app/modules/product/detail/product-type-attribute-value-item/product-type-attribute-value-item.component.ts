import {
  ChangeDetectionStrategy, Component, EventEmitter, Input, OnChanges, OnInit, Output,
  SimpleChanges
} from '@angular/core';
import {ProductTypeAttributeValues} from "../../../../models/models";

@Component({
  selector: '[frontend-admin-product-type-attribute-value-item]',
  template: `
    <ng-template [ngIf]="!isEditing">
      <th scope="row">{{productTypeAttributeValue.id}}</th>
      <td>{{productTypeAttributeValue.productTypeAttribute.name}}</td>
      <td>{{productTypeAttributeValue.value}}</td>
      <td>
        <button class="btn btn-sm btn-outline-primary"
                (click)="isEditing=true">Edit
        </button>
      </td>
    </ng-template>
    <ng-template [ngIf]="isEditing">
      <th scope="row">{{_productTypeAttributeValue?.id}}</th>
      <td>{{_productTypeAttributeValue?.productTypeAttribute.name}}</td>
      <td><input type="text"
                 class="form-control"
                 #value="ngModel"
                 [(ngModel)]="_productTypeAttributeValue.value"></td>
      <td>
        <button class="btn btn-sm btn-outline-success"
                (click)="onChange()">Save
        </button>
      </td>
    </ng-template>
  `,
  styleUrls: ['./product-type-attribute-value-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductTypeAttributeValueItemComponent implements OnInit, OnChanges {


  @Input()
  productTypeAttributeValue: ProductTypeAttributeValues;
  private _productTypeAttributeValue: ProductTypeAttributeValues;

  @Output()
  productTypeAttributeValueChange = new EventEmitter<ProductTypeAttributeValues>();

  isEditing: boolean;

  constructor() {
    this.isEditing = false;
  }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges): void {
    this._productTypeAttributeValue = Object.assign({}, this.productTypeAttributeValue);
  }

  private onChange() {
    this.isEditing = false;
    this.productTypeAttributeValueChange.emit(this._productTypeAttributeValue);

  }
}
