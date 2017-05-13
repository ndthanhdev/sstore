import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'frontend-loading',
  template: `
    <div class="d-flex justify-content-center">
      <i class="fa fa-spinner fa-pulse fa-2x fa-fw"></i>
    </div>
  `,
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {

  constructor() {
  }

  ngOnInit() {
  }

}
