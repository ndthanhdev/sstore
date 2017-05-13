import {ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

@Component({
  selector: 'frontend-product-summary-list-header',
  template: `
    <ngb-pagination class="col-lg-4 col-6"
                    (pageChange)="onPageChange($event)"
                    [collectionSize]="collectionSize"
                    [maxSize]="3"
                    [pageSize]="pageSize"
                    [boundaryLinks]="true"
                    [page]="page"></ngb-pagination>

    <!--START NAME FILTER-->
    <div class="input-group col-4">
      <span class="input-group-addon"><i class="fa fa-search"></i></span>
      <input type="text" class="form-control" placeholder="Name filter" aria-describedby="sizing-addon2">
    </div>
    <!--END NAME FILTER-->

    <div ngbDropdown class="d-inline-block col-2">
      <button class="btn btn-secondary" ngbDropdownToggle>Best seller</button>
      <div class="dropdown-menu" aria-labelledby="dropdownBasic1">
        <button class="dropdown-item active">Best seller</button>
        <button class="dropdown-item">Most rating</button>
        <button class="dropdown-item">Price: Highest first</button>
        <button class="dropdown-item">Price: lowest first</button>
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

  @Output() pageChange: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onPageChange($event) {
    this.pageChange.emit($event);
  }

}
