import {Injectable} from "@angular/core";
import {Actions, Effect} from "@ngrx/effects";
import {Observable} from "rxjs/Observable";
import {Action} from "@ngrx/store";

import * as productdActions from "../actions/product.action";
import "rxjs/add/operator/switchMap";
import {of} from "rxjs/observable/of";
import "rxjs/add/operator/concatMap";
import {ProductService} from "../../modules/product/product.service";
import "rxjs/add/observable/from";


@Injectable()
export class ProductEffect {


  constructor(private actions$: Actions,
              private productService: ProductService) {
  }

  @Effect()
  paginatedListOfProductsLoad$: Observable<Action> = this.actions$
    .ofType(productdActions.ActionTypes.START_PRODUCTS_LOAD)
    .switchMap(action => this.productService.loadPaginatedListOfProducts(action.payload.page)
      .concatMap(paginatedListOfProducts => of(new productdActions.LoadProductsAction({paginatedListOfProducts: paginatedListOfProducts}))));

  @Effect()
  productDetailActionLoad$: Observable<Action> = this.actions$
    .ofType(productdActions.ActionTypes.START_PRODUCT_DETAIL_LOAD)
    .switchMap(action => this.productService.loadProductDetail(action.payload.id)
      .concatMap(product => of(new productdActions.LoadProductDetailAction({product: product}))));

  @Effect()
  productVariantActionLoad$: Observable<Action> = this.actions$
    .ofType(productdActions.ActionTypes.START_PRODUCT_VARIANT_LOAD)
    .switchMap(action => this.productService.loadProductVariants(action.payload.id, action.payload.page)
      .concatMap(paginatedListOfProductVariants => of(new productdActions.LoadProductVariantsAction({paginatedListOfProductVariants: paginatedListOfProductVariants}))));

}
