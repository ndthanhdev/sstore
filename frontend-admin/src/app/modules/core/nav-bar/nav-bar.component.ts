import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'frontend-admin-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {

  @Input()
  username:string;

  @Input()
  fullName:string;

  constructor() { }

  ngOnInit() {
  }

}
