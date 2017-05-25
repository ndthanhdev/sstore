import {Component, Input, OnInit} from '@angular/core';
import {OrderState} from '../../../models/order.model';

@Component({
  selector: 'frontend-order-state-button',
  template: `
    <button [class]="stateToButtonClass(state)">{{stateToString(state)}}</button>
  `,
  styleUrls: ['./order-state-button.component.scss']
})
export class OrderStateButtonComponent implements OnInit {
  @Input() state: OrderState;

  constructor() {
  }

  ngOnInit() {
  }

  stateToString(state: OrderState): string {
    switch (state) {
      case OrderState.PROCESSING:
        return 'Processing';
      case OrderState.DELIVERING:
        return 'Delivering';
      case OrderState.DONE:
        return 'Done';
    }
  }

  stateToButtonClass(state): string {
    switch (state) {
      case OrderState.PROCESSING:
        return 'btn btn-sm btn-info';
      case OrderState.DELIVERING:
        return 'btn btn-sm btn-primary border-1 border-white';
      case OrderState.DONE:
        return 'btn btn-sm btn-success';
    }
  }

}
