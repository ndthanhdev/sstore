import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'frontend-create-cart',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Creating your new Shopping Cart...</h4>
    </div>
    <div class="modal-body">
      <frontend-loading></frontend-loading>
    </div>
  `,
  styleUrls: ['./create-cart.component.scss']
})
export class CreateCartComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
