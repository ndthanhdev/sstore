import {Component, Input, OnInit} from '@angular/core';
import {ProductVariationValue} from '../../../models/product-variation-values.model';

@Component({
  selector: 'frontend-product-variation-values',
  template: `
    <span class="badge badge-pill badge-success mr-1"
          *ngFor="let value of variationValues">{{value.name}}: {{value.value}}</span>
  `,
  styleUrls: ['./product-variation-values.component.scss']
})
export class ProductVariationValuesComponent implements OnInit {
  @Input() variationValues: ProductVariationValue[];

  constructor() {
  }

  ngOnInit() {
  }

}
