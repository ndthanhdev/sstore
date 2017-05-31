import {Component, Input, OnInit} from '@angular/core';
import {Products} from "../../../../models/models";

@Component({
  selector: 'frontend-admin-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.scss']
})
export class ProductItemComponent implements OnInit {

  @Input()
  product:Products;

  constructor() {
  }

  ngOnInit() {
  }

}
