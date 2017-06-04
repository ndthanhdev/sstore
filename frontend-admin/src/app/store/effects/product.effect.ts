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
import {StoreProductVariant} from "../../models/models";


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
      .concatMap(paginatedListOfProductVariants =>
        of(new productdActions.LoadProductVariantsAction(
          {paginatedListOfProductVariants: paginatedListOfProductVariants}))));

  @Effect()
  productTypeAttributeValueUpdate$: Observable<Action> = this.actions$
    .ofType(productdActions.ActionTypes.START_PRODUCT_TYPE_ATTRIBUTE_VALUE_UPDATE)
    .switchMap(action => this.productService.updateProductTypeAttributeValue(action.payload.productTypeAttributeValue)
      .concatMap(response =>
        of(new productdActions.UpdateProductTypeAttributeValueAction(
          {
            response: response,
            productTypeAttributeValue: action.payload.productTypeAttributeValue
          }))));

  @Effect()
  customAttributeUpdate$: Observable<Action> = this.actions$
    .ofType(productdActions.ActionTypes.START_CUSTOM_ATTRIBUTE_UPDATE)
    .switchMap(action => this.productService.updateCustomAttribute(action.payload.customAttribute)
      .concatMap(response =>
        of(new productdActions.UpdateCustomAttributeAction(
          {
            response: response,
            customAttribute: action.payload.customAttribute
          }))));

  @Effect()
  updateProductVariationValueUpdate$: Observable<Action> = this.actions$
    .ofType(productdActions.ActionTypes.START_PRODUCT_VARIANT_VALUE_UPDATE)
    .switchMap(action => this.productService.updateProductVariationValue(action.payload.productVariationValue)
      .concatMap(response =>
        of(new productdActions.UpdateProductVariationValueAction(
          {
            response: response,
            productVariationValue: action.payload.productVariationValue
          }))));

  @Effect()
  storeProductVariantActionUpdate$: Observable<Action> = this.actions$
    .ofType(productdActions.ActionTypes.START_STORE_PRODUCT_VARIANT_UPDATE)
    .switchMap(action => this.productService.updateStoreProductVariants(action.payload.storeProductVariant)
      .concatMap(response =>
        of(new productdActions.UpdateStoreProductVariantsAction(
          {
            response: response,
            storeProductVariant: action.payload.storeProductVariant
          }))));

  @Effect()
  customAttributeAdd$: Observable<Action> = this.actions$
    .ofType(productdActions.ActionTypes.START_CUSTOM_ATTRIBUTE_ADD)
    .switchMap(action => this.productService.addCustomAttribute(action.payload.customAttribute)
      .concatMap(customAttribute =>
        of(new productdActions.AddCustomAttributeAction(
          {
            customAttribute: customAttribute
          }))));

  @Effect()
  customAttributeDelete$: Observable<Action> = this.actions$
    .ofType(productdActions.ActionTypes.START_CUSTOM_ATTRIBUTE_DELETE)
    .switchMap(action => this.productService.deleteCustomAttribute(action.payload.customAttribute.id)
      .concatMap(response =>
        of(new productdActions.DeleteCustomAttributeAction())));
}
