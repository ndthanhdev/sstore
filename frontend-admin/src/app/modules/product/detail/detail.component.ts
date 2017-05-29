import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Subscription} from "rxjs/Subscription";
import {ProductService} from "../product.service";
import * as rootReducer from "../../../store/reducers/root";
import {Products} from "../../../models/models";
import {Store} from "@ngrx/store";
import {StartProductDetailLoadAction, StartProductsLoadAction} from "../../../store/actions/product.action";
import {Observable} from "rxjs/Observable";

@Component({
  selector: 'frontend-admin-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  id: number;
  private sub: Subscription;
  product: Observable<Products>;

  constructor(private route: ActivatedRoute,
              private store: Store<rootReducer.State>) {
  }

  ngOnInit() {
    this.product = this.store.select(rootReducer.getProductProduct);

    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number

      this.store.dispatch(new StartProductDetailLoadAction({id:this.id}));
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
