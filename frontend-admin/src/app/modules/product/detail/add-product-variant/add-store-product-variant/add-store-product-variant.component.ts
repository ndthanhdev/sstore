import {ChangeDetectionStrategy, Component, Input, OnInit, Output} from '@angular/core';
import {StoreProductVariant} from "../../../../../models/models";

@Component({
  selector: '[frontend-admin-add-store-product-variant]',
  template: `
    <th scope="row">#</th>
    <td [routerLink]="['/store',storeProductVariant?.store.id]">{{storeProductVariant?.store.name}}</td>
    <td><input type="text"
               pattern="[1-9]\d*$"
               class="form-control"
               #price="ngModel"
               [(ngModel)]="storeProductVariant.price"
               required></td>
    <td><input type="text"
               pattern="[1-9]\d*$"
               class="form-control"
               #inStock="ngModel"
               [(ngModel)]="storeProductVariant.inStock"
               required></td>
    <td class="d-flex">
      <button class="btn btn-sm btn-outline-success" [disabled]="!inStock.valid||!price.valid" (click)="onChange()">Save
      </button>
    </td>
  `,
  styleUrls: ['./add-store-product-variant.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AddStoreProductVariantComponent implements OnInit {

  @Input()
  storeProductVariant: StoreProductVariant;

  constructor() {
  }

  ngOnInit() {
  }

}
