import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'frontend-admin-order-state-button',
  template: `
    <button [class]="stateToButtonClass(state)">{{stateToString(state)}}</button>
  `,
  styleUrls: ['./order-state-button.component.scss']
})
export class OrderStateButtonComponent implements OnInit {

  @Input() state: number;

  constructor() { }

  ngOnInit() {
  }

  stateToString(state: number): string {
    switch (state) {
      case 0:
        return 'Processing';
      case 1:
        return 'Delivering';
      case 2:
        return 'Done';
    }
  }
  stateToButtonClass(state): string {
    switch (state) {
      case 0:
        return 'btn btn-sm btn-info';
      case 1:
        return 'btn btn-sm btn-primary border-1 border-white';
      case 2:
        return 'btn btn-sm btn-success';
    }
  }

}
