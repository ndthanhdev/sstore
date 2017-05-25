import {Component, OnDestroy, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';

import {OrderSummary} from '../../../models/order.model';
import {Page} from '../../../models/page.model';
import {Observable} from 'rxjs/Observable';

import * as fromRoot from '../../../store/reducers';
import * as orderActions from '../../../store/actions/order.action';
import {Subscription} from 'rxjs/Subscription';

@Component({
  selector: 'frontend-order',
  template: `
    <div class="jumbotron bg-primary text-white">
      <div class="container">
        <h1 class="display-3">Orders</h1>
      </div>
    </div>
    <div class="container">

      <span class="display-4">Done Orders:</span>
      <hr>

      <div class="d-flex justify-content-between align-items-center">
        <ngb-pagination (pageChange)="onPageChange($event)"
                        [collectionSize]="orderPage?.total"
                        [maxSize]="5"
                        [pageSize]="10"
                        [boundaryLinks]="true"
                        [page]="currentPage">
        </ngb-pagination>

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

      <frontend-loading *ngIf="(loading | async);else show"></frontend-loading>
      <ng-template #show>
        <table class="table table-hover">
          <thead>
          <tr>
            <th>#</th>
            <th>Code</th>
            <th>State</th>
            <th>Created At</th>
            <th>Last Updated</th>
          </tr>
          </thead>
          <tbody>
          <tr *ngFor="let order of orderPage?.data; let i = index">
            <th scope="row">{{i + 1}}</th>
            <td><a [routerLink]="['/orders', order.id]">{{order.code}}</a></td>
            <td>
              <frontend-order-state-button
                [state]="order.state">
              </frontend-order-state-button>
            </td>
            <td>{{order.created_at | amTimeAgo}}</td>
            <td>{{order.updated_at | amTimeAgo}}</td>
          </tr>

          </tbody>
        </table>
      </ng-template>
    </div>
  `,
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit, OnDestroy {
  currentPage = 1;

  orderPage: Page<OrderSummary>;
  orderPageSub: Subscription;

  loading: Observable<boolean>;

  filterMode = 1;

  constructor(private store: Store<fromRoot.State>) {
    this.orderPageSub = this.store.select(fromRoot.getOrderOrders).subscribe(orderPage => this.orderPage = orderPage);
    this.loading = this.store.select(fromRoot.getOrderLoading);
  }

  ngOnInit() {
    this.store.dispatch(new orderActions.StartOrdersLoadAction({page: this.currentPage}));
  }

  ngOnDestroy(): void {
    this.orderPageSub.unsubscribe();
  }

  onFilterModeChange() {

  }

  onPageChange($event) {
    this.currentPage = $event;
    this.store.dispatch(new orderActions.StartOrdersLoadAction({page: this.currentPage}));
  }

}
