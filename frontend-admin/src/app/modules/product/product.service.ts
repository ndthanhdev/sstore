import {Injectable} from '@angular/core';
import {GenericService} from "../../generic.service";
import {Http, RequestOptions, Response} from "@angular/http";
import {Observable} from "rxjs/Observable";
import {
  CustomAttributes,
  PaginatedListOfProducts, PaginatedListOfProductVariants, Products, ProductTypeAttributeValues, ProductVariationValues,
  StoreProductVariant
} from "../../models/models";
import {AuthHttp} from "angular2-jwt";

@Injectable()
export class ProductService extends GenericService {
  constructor(http: Http, authHttp: AuthHttp) {
    super(http, authHttp);
    this.BASE_URL += '/Products'
  }

  public loadPaginatedListOfProducts(page: number = 1): Observable<PaginatedListOfProducts> {
    return this.get(new RequestOptions({
      url: `${this.BASE_URL}`,
      params: {
        'page': page
      }
    }));
  }

  public loadProductDetail(id: number): Observable<Products> {
    return this.get(new RequestOptions({
      url: `${this.BASE_URL}/${id}`
    }));
  }

  public loadProductVariants(id: number, page: number): Observable<PaginatedListOfProductVariants> {
    return this.get(new RequestOptions({
      url: `${this.BASE_URL}/${id}/ProductVariants`,
      params: {
        'page': page
      }
    }));
  }

  public updateProductTypeAttributeValue(productTypeAttributeValue: ProductTypeAttributeValues): Observable<Response> {
    return this.put(new RequestOptions({
      url: `${this.ORIGINAL_BASE_URL}/ProductTypeAttributeValues/${productTypeAttributeValue.id}`
    }), productTypeAttributeValue);
  }

  public updateCustomAttribute(customAttributes: CustomAttributes): Observable<Response> {
    return this.put(new RequestOptions({
      url: `${this.ORIGINAL_BASE_URL}/CustomAttributes/${customAttributes.id}`
    }), customAttributes);
  }

  public updateProductVariationValue(productVariationValue: ProductVariationValues): Observable<Response> {
    return this.put(new RequestOptions({
      url: `${this.ORIGINAL_BASE_URL}/ProductVariationValues/${productVariationValue.id}`
    }), productVariationValue);
  }

  public updateStoreProductVariants(storeProductVariant: StoreProductVariant): Observable<Response> {
    return this.put(new RequestOptions({
      url: `${this.ORIGINAL_BASE_URL}/StoreProductVariants/${storeProductVariant.id}`
    }), storeProductVariant);
  }

  public addCustomAttribute(customAttribute: CustomAttributes): Observable<Response> {
    return this.post(new RequestOptions({
      url: `${this.ORIGINAL_BASE_URL}/CustomAttributes`
    }), customAttribute);
  }

  public deleteCustomAttribute(id: number): Observable<Response> {
    return this.delete(new RequestOptions({
      url: `${this.ORIGINAL_BASE_URL}/CustomAttributes/${id}`
    }));
  }
}
