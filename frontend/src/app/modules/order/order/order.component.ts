import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'frontend-order',
  template: `
    <div class="jumbotron bg-primary text-white">
      <div class="container">
        <h1 class="display-3">Orders</h1>
      </div>
    </div>
    <div class="container">
    <span class="col-12 display-4">
        My Orders:
      </span>
      <hr>
      <div class="d-flex justify-content-between">
        <ngb-pagination (pageChange)="onPageChange($event)"
                        [collectionSize]="10"
                        [maxSize]="5"
                        [pageSize]="5"
                        [boundaryLinks]="true"
                        [page]="1"></ngb-pagination>

        <div [(ngModel)]="filterMode" ngbRadioGroup name="filter-groups"
             (ngModelChange)="onFilterModeChange()"
             class="btn-group btn-group-sm align-self-start">
          <label class="btn btn-sm btn-outline-primary">
            <input type="radio" [value]="1"> All
          </label>
          <label class="btn btn-sm btn-outline-primary">
            <input type="radio" [value]="2"> Processing
          </label>
          <label class="btn btn-sm btn-outline-primary">
            <input type="radio" [value]="3"> Delivering
          </label>
          <label class="btn btn-sm btn-outline-primary">
            <input type="radio" [value]="4"> Done
          </label>
        </div>

      </div>
      <table class="table table-hover">
        <thead>
        <tr>
          <th>#</th>
          <th>Code</th>
          <th>State</th>
          <th>Updated At</th>
          <th>Created At</th>
        </tr>
        </thead>
        <tbody>
        <tr>
          <th scope="row">1</th>
          <td><a href="#">SSORD7520</a></td>
          <td>
            <button class="btn btn-sm btn-info">Processing</button>
          </td>
          <td>17:40 25/5/2017</td>
          <td>17:41 25/5/2017</td>
        </tr>

        <tr>
          <th scope="row">1</th>
          <td><a href="#">SSORD7520</a></td>
          <td>
            <button class="btn btn-sm btn-info">Processing</button>
          </td>
          <td>17:40 25/5/2017</td>
          <td>17:41 25/5/2017</td>
        </tr>

        <tr>
          <th scope="row">1</th>
          <td><a href="#">SSORD7520</a></td>
          <td>
            <button class="btn btn-sm btn-info">Processing</button>
          </td>
          <td>17:40 25/5/2017</td>
          <td>17:41 25/5/2017</td>
        </tr>
        <tr>
          <th scope="row">1</th>
          <td><a href="#">SSORD7520</a></td>
          <td>
            <button class="btn btn-sm btn-info">Processing</button>
          </td>
          <td>17:40 25/5/2017</td>
          <td>17:41 25/5/2017</td>
        </tr>
        <tr>
          <th scope="row">1</th>
          <td><a href="#">SSORD7520</a></td>
          <td>
            <button class="btn btn-sm btn-info">Processing</button>
          </td>
          <td>17:40 25/5/2017</td>
          <td>17:41 25/5/2017</td>
        </tr>
        <tr>
          <th scope="row">1</th>
          <td><a href="#">SSORD7520</a></td>
          <td>
            <button class="btn btn-sm btn-info">Processing</button>
          </td>
          <td>17:40 25/5/2017</td>
          <td>17:41 25/5/2017</td>
        </tr>
        <tr>
          <th scope="row">1</th>
          <td><a href="#">SSORD7520</a></td>
          <td>
            <button class="btn btn-sm btn-info">Processing</button>
          </td>
          <td>17:40 25/5/2017</td>
          <td>17:41 25/5/2017</td>
        </tr>
        </tbody>
      </table>
    </div>
  `,
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit {

  filterMode = 1;

  constructor() {
  }

  ngOnInit() {
  }

  onFilterModeChange() {

  }

}
