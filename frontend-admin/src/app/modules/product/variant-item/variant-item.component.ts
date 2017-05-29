import {Component, Input, OnInit} from '@angular/core';
import {ProductVariants} from "../../../models/models";

@Component({
  selector: 'frontend-admin-variant-item',
  templateUrl: './variant-item.component.html',
  styleUrls: ['./variant-item.component.scss']
})
export class VariantItemComponent implements OnInit {

  @Input()
  productVariant: ProductVariants;

  constructor() {
  }

  ngOnInit() {
  }

}
