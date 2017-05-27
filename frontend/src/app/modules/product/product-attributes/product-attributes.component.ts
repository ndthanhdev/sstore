import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {Product} from '../../../models/product.model';

@Component({
  selector: 'frontend-product-attributes',
  template: `
    <div class="col-lg-6 col-12">
      <p class="lead">Product Type Attributes: <span class="badge badge-pill badge-primary">{{product.product_type.name}}</span></p>
      <table class="table table-hover">
        <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Value</th>
          <!--<th>Action</th>-->
        </tr>
        </thead>
        <tbody>
        <tr *ngFor="let productTypeAttrVal of product.product_type_attribute_values; let i=index">
          <th scope="row">{{i + 1}}</th>
          <td>{{productTypeAttrVal.name}}</td>
          <td>{{productTypeAttrVal.pivot.value}}</td>
          <!--<td>-->
          <!--<button class="btn btn-sm btn-outline-primary">Edit</button>-->
          <!--</td>-->
        </tr>
        <tr>
        </tbody>
      </table>
    </div>

    <div class="col-lg-6 col-12 mb-3">
      <div class="d-flex justify-content-between align-items-start">
        <p class="lead">Custom Attributes:</p>
        <!--<button class="btn btn-outline-primary">+</button>-->
      </div>
      <table class="table table-hover">
        <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Value</th>
          <!--<th>Action</th>-->
        </tr>
        </thead>
        <tbody>
        <tr *ngFor="let customAttrVal of product.custom_attribute_values; let i = index">
          <th scope="row">{{i + 1}}</th>
          <td>{{customAttrVal.name}}</td>
          <td>{{customAttrVal.value}}</td>
          <!--<td>-->
          <!--<button class="btn btn-sm btn-outline-primary">Edit</button>-->
          <!--</td>-->
        </tr>
        </tbody>
      </table>
    </div>
  `,
  styleUrls: ['./product-attributes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductAttributesComponent implements OnInit {
  @Input() product: Product;

  constructor() {
  }

  ngOnInit() {
  }

}
