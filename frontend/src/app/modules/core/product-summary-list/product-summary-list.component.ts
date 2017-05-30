import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {ProductSummary} from '../../../models/product.model';
import {Page} from '../../../models/page.model';

@Component({
  selector: 'frontend-product-summary-list',
  template: `
    <frontend-product-summary-list-header
      class="row px-3 d-flex align-items-start"
      [pageSize]="6"
      [page]="page"
      [collectionSize]="productPage?.total"
      [loading]="productLoading"
      (pageChange)="onPageChange($event)">
    </frontend-product-summary-list-header>
    <div class="row px-3">
      <frontend-product-summary
        class="col-lg-4 col-md-6 col-12 mb-3"
        *ngFor="let product of productPage?.data"
        [productSummary]="product"
        (putToCartButtonClicked)="onPutToCartButtonClick($event)">
      </frontend-product-summary>
    </div>
  `,
  styleUrls: ['./product-summary-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductSummaryListComponent implements OnInit {
  @Input() productPage: Page<ProductSummary>;
  @Input() page: number;
  @Input() productLoading: boolean;

  @Output() pageChanged = new EventEmitter();
  @Output() putToCartButtonClicked = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onPageChange($event) {
    this.pageChanged.emit($event);
  }

  onPutToCartButtonClick($event) {
    this.putToCartButtonClicked.emit($event);
  }

}
