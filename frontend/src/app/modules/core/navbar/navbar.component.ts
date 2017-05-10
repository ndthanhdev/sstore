import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'frontend-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  @Input() itemInCart: number;
  @Input() storeName: string;

  constructor() {
  }

  ngOnInit() {
  }

}