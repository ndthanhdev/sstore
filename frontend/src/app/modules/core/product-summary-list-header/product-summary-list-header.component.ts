import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'frontend-product-summary-list-header',
  template: `
    <div class="row px-4 align-items-start d-flex justify-content-end">
      <ngb-pagination
        class="mr-auto"
        (pageChange)="onPageChange($event)"
        [collectionSize]="collectionSize"
        [maxSize]="5"
        [pageSize]="pageSize"
        [boundaryLinks]="true"
        [page]="page">
      </ngb-pagination>

      <i class="fa fa-spinner fa-pulse fa-2x fa-fw mr-auto" *ngIf="loading"></i>

      <!--START NAME FILTER-->
      <div class="input-group col-4">
        <span class="input-group-addon"><i class="fa fa-filter"></i></span>
        <input type="text" class="form-control" placeholder="Name filter">
      </div>
      <!--END NAME FILTER-->

      <div ngbDropdown class="col-2 mr-4">
        <button class="btn btn-secondary" ngbDropdownToggle>Rating: Highest first</button>
        <div class="dropdown-menu">
          <button class="dropdown-item active">Rating: Highest first</button>
          <button class="dropdown-item">Price: Highest first</button>
          <button class="dropdown-item">Price: lowest first</button>
        </div>
      </div>
    </div>
  `,
  styleUrls: ['./product-summary-list-header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ProductSummaryListHeaderComponent implements OnInit {
  @Input() pageSize: number;
  @Input() collectionSize: number;
  @Input() page: number;
  @Input() loading: boolean;

  @Output() pageChange: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onPageChange($event) {
    this.pageChange.emit($event);
  }

}
