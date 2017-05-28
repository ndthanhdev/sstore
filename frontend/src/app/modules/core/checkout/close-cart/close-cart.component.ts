import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'frontend-close-cart',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Closing your current shopping cart...</h4>
    </div>
    <div class="modal-body">
      <frontend-loading></frontend-loading>
    </div>
  `,
  styleUrls: ['./close-cart.component.scss']
})
export class CloseCartComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
