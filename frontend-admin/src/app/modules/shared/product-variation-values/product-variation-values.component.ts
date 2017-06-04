import {Component, Input, OnInit} from '@angular/core';
import {ProductVariationValues} from "../../../models/models";

@Component({
  selector: 'frontend-admin-product-variation-values',
  template: `
    <span class="badge badge-pill badge-success mr-1"
          *ngFor="let value of variationValues">{{value.name}}: {{value.value}}</span>
  `,
  styleUrls: ['./product-variation-values.component.scss']
})
export class ProductVariationValuesComponent implements OnInit {
  @Input()
  variationValues: ProductVariationValues[];

  constructor() {
  }

  ngOnInit() {
  }

}
