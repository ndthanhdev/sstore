import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'frontend-delivering-onstore',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Delivering your order...</h4>
    </div>
    <div class="modal-body">
      <small class="text-muted">Product 1</small>
      <ngb-progressbar showValue="true" type="primary" [value]="25"></ngb-progressbar>
    </div>
  `,
  styleUrls: ['./delivering-onstore.component.scss']
})
export class DeliveringOnstoreComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
