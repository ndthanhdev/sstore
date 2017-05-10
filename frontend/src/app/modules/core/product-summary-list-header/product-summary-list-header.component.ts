import {Component, EventEmitter, OnInit, Output} from '@angular/core';

@Component({
  selector: 'frontend-product-summary-list-header',
  template: `
    <ngb-pagination class="col-lg-2 col-4 mr-4"
                    (pageChange)="onPageChange($event)"
                    [collectionSize]="10"
                    [maxSize]="5"
                    [pageSize]="10"
                    [boundaryLinks]="true"
                    [page]="5"></ngb-pagination>

    <!--START NAME FILTER-->
    <div class="input-group col-4">
      <span class="input-group-addon"><i class="fa fa-search"></i></span>
      <input type="text" class="form-control" placeholder="Name filter" aria-describedby="sizing-addon2">
    </div>
    <!--END NAME FILTER-->

    <div ngbDropdown class="d-inline-block ml-3">
      <button class="btn btn-secondary" ngbDropdownToggle>Best seller</button>
      <div class="dropdown-menu" aria-labelledby="dropdownBasic1">
        <button class="dropdown-item active">Best seller</button>
        <button class="dropdown-item">Most rating</button>
        <button class="dropdown-item">Price: Highest first</button>
        <button class="dropdown-item">Price: lowest first</button>
      </div>
    </div>
  `,
  styleUrls: ['./product-summary-list-header.component.scss']
})
export class ProductSummaryListHeaderComponent implements OnInit {
  @Output() pageChange: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  onPageChange($event) {
    this.pageChange.emit($event);
  }

}
