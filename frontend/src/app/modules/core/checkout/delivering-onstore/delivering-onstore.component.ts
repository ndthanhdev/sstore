import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'frontend-delivering-onstore',
  template: `
    <div class="modal-header">
      <h4 class="modal-title">Delivering your order...</h4>
    </div>
    <div class="modal-body">
      <small class="text-muted">Product 1</small>
      <div class="progress">
        <div class="progress-bar" role="progressbar" style="width: 25%;" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">25%</div>
      </div>
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
