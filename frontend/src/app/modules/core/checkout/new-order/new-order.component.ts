import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'frontend-new-order',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Creating new order...</h4>
    </div>
    <div class="modal-body">
      <frontend-loading></frontend-loading>
    </div>
  `,
  styleUrls: ['./new-order.component.scss']
})
export class NewOrderComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
