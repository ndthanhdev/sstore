import {ChangeDetectionStrategy, Component, Input, OnInit} from '@angular/core';
import {ProductSummary} from '../../../models/product.model';
import {Page} from '../../../models/page.model';

@Component({
  selector: 'frontend-product-summary-list',
  template: `
    <frontend-product-summary-list-header
      class="row px-3 d-flex align-items-start"
      [pageSize]="6"
      [page]="1"
      [collectionSize]="productPage?.total">
    </frontend-product-summary-list-header>
    <div class="row px-3">
      <frontend-product-summary
        class="col-lg-4 col-md-6 col-12 mb-3"
        *ngFor="let product of productPage?.data"
        [productSummary]="product">
      </frontend-product-summary>
    </div>
  `,
  styleUrls: ['./product-summary-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductSummaryListComponent implements OnInit {
  @Input() productPage: Page<ProductSummary>;

  constructor() {
  }

  ngOnInit() {
  }

}
