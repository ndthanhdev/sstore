import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import 'rxjs/add/operator/filter';

@Component({
  selector: 'frontend-admin-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent implements OnInit {

  sub : Subscription;
  page:number;
  count:number;

  constructor(private route: ActivatedRoute) { }


  // [routerLink]=['./', {page=2}]
  ngOnInit() {
    this.sub = this.route
      .queryParams
      .filter(params => +params['page'] !== this.page)
      .subscribe(params => {
        // Defaults to 0 if no query param provided.
        this.page = +params['page'] || 1;
        // request
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
