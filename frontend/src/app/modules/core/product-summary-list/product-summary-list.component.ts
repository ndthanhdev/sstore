import {Component, OnInit} from '@angular/core';
import {ProductSummary} from '../../../models/product.model';
import {PRODUCT_SUMMARY_LIST} from '../../../constant/data.constant';

@Component({
  selector: 'frontend-product-summary-list',
  template: `
    <frontend-product-summary-list-header
      class="row px-3 d-flex align-items-start">
    </frontend-product-summary-list-header>
    <div class="row px-3 ">
      <frontend-product-summary
        class="col-lg-4 col-md-6 col-12 mb-3"
        [productSummary]="products[0]">
      </frontend-product-summary>
      <frontend-product-summary
        class="col-lg-4 col-md-6 col-12 mb-3"
        [productSummary]="products[0]">
      </frontend-product-summary>
      <frontend-product-summary
        class="col-lg-4 col-md-6 col-12 mb-3"
        [productSummary]="products[0]">
      </frontend-product-summary>
      <frontend-product-summary
        class="col-lg-4 col-md-6 col-12 mb-3"
        [productSummary]="products[0]">
      </frontend-product-summary>

    </div>
  `,
  styleUrls: ['./product-summary-list.component.scss']
})
export class ProductSummaryListComponent implements OnInit {
  products: ProductSummary[];

  constructor() {
    this.products = PRODUCT_SUMMARY_LIST;
  }

  ngOnInit() {
  }

}
