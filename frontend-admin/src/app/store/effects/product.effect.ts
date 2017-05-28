import {Injectable} from "@angular/core";
import {Actions, Effect} from "@ngrx/effects";
import {Observable} from "rxjs/Observable";
import {Action} from "@ngrx/store";

import * as productdActions from "../actions/product.action";
import "rxjs/add/operator/switchMap";
import {of} from "rxjs/observable/of";
import "rxjs/add/operator/concatMap";
import {ProductService} from "../../modules/product/product.service";


@Injectable()
export class ProductEffect {


  constructor(private actions$: Actions,
              private productService: ProductService) {
  }

  @Effect()
  paginatedListOfProducts$: Observable<Action> = this.actions$
    .ofType(productdActions.ActionTypes.START_PRODUCTS_LOAD)
    .switchMap(action => this.productService.loadPaginatedListOfProducts(action.payload.page)
      .concatMap(paginatedListOfProducts => of(new productdActions.LoadProductsAction({paginatedListOfProducts: paginatedListOfProducts}))));

}
