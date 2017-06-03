import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'frontend-admin-loading-indicator',
  templateUrl: './loading-indicator.component.html',
  styleUrls: ['./loading-indicator.component.scss']
})
export class LoadingIndicatorComponent implements OnInit {

  @Input()
  size:number;

  constructor() { }

  ngOnInit() {
  }

}
