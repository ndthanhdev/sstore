import * as productAction from "../actions/product.action";
import {
  CustomAttributes, PaginatedListOfProducts, PaginatedListOfProductVariants, Products,
  ProductTypeAttributeValues
} from "../../models/models";
import {Action} from "@ngrx/store";

export interface State {
  isBusy: boolean;
  paginatedListOfProducts: PaginatedListOfProducts;
  product: Products;
  paginatedListOfProductVariants: PaginatedListOfProductVariants;
}

export const initialState: State = {
  isBusy: false,
  paginatedListOfProducts: null,
  product: null,
  paginatedListOfProductVariants: null,
};

export function reducer(state: State = initialState, action: Action): State {
  switch (action.type) {

    // load products
    case productAction.ActionTypes.START_PRODUCTS_LOAD:
      return Object.assign({}, state, {
        isBusy: true
      });
    case productAction.ActionTypes.LOAD_PRODUCTS:
      return Object.assign({}, state, {
        isBusy: false,
        paginatedListOfProducts: action.payload.paginatedListOfProducts
      });

    // load product detail
    case productAction.ActionTypes.START_PRODUCT_DETAIL_LOAD:
      return Object.assign({}, state, {
        isBusy: true
      });
    case productAction.ActionTypes.LOAD_PRODUCT_DETAIL:
      return Object.assign({}, state, {
        isBusy: false,
        product: action.payload.product
      });

    // load product VARIANT
    case productAction.ActionTypes.START_PRODUCT_VARIANT_LOAD:
      return Object.assign({}, state, {
        isBusy: true
      });
    case productAction.ActionTypes.LOAD_PRODUCT_VARIANT:
      return Object.assign({}, state, {
        isBusy: false,
        paginatedListOfProductVariants: action.payload.paginatedListOfProductVariants
      });

    // update product type attribute value
    case productAction.ActionTypes.START_PRODUCT_TYPE_ATTRIBUTE_VALUE_UPDATE:
      return Object.assign({}, state, {
        isBusy: true
      });


    case productAction.ActionTypes.UPDATE_PRODUCT_TYPE_ATTRIBUTE_VALUE:
      return Object.assign({}, state, {
        product: Object.assign({}, state.product, {
          productTypeAttributeValues: state.product.productTypeAttributeValues.map(ptav => {
            if (ptav.id === action.payload.productTypeAttributeValue.id) {
              return Object.assign({}, ptav, action.payload.productTypeAttributeValue);
            } else {
              return ptav;
            }
          })
        }),
        isBusy: false
      });

    // update custom attribute
    case productAction.ActionTypes.START_CUSTOM_ATTRIBUTE_UPDATE:
      return Object.assign({}, state, {
        isBusy: true
      });
    case productAction.ActionTypes.UPDATE_CUSTOM_ATTRIBUTE_VALUE:
      return Object.assign({}, state, {
        product: Object.assign({}, state.product, {
          customAttributes: state.product.customAttributes.map(attr => {
            if (attr.id === action.payload.customAttribute.id) {
              return Object.assign({}, attr, action.payload.customAttribute);
            } else {
              return attr;
            }
          })
        }),
        isBusy: false
      });

    // update product variationvalue
    case productAction.ActionTypes.START_PRODUCT_VARIANT_VALUE_UPDATE:
      return Object.assign({}, state, {
        isBusy: true
      });
    case productAction.ActionTypes.UPDATE_PRODUCT_VARIANT_VALUE:
      return Object.assign({}, state, {
        paginatedListOfProductVariants: Object.assign({}, state.paginatedListOfProductVariants, {
          data: state.paginatedListOfProductVariants.data.map(pv => {
            return Object.assign({}, pv, {
              productVariationValues: pv.productVariationValues.map(pvv => {
                if (pvv.id === action.payload.productVariationValue.id) {
                  return Object.assign({}, pvv, action.payload.productVariationValue);
                }
                return pvv;
              })
            })
          }),
          isBusy: false
        })
      });

    // update store product variant
    case productAction.ActionTypes.START_STORE_PRODUCT_VARIANT_UPDATE:
      return Object.assign({}, state, {
        isBusy: true
      });
    case productAction.ActionTypes.UPDATE_STORE_PRODUCT_VARIANT:
      return Object.assign({}, state, {
        paginatedListOfProductVariants: Object.assign({}, state.paginatedListOfProductVariants, {
          data: state.paginatedListOfProductVariants.data.map(pv => {
            return Object.assign({}, pv, {
              storeProductVariant: pv.storeProductVariant.map(spv => {
                if (spv.id === action.payload.storeProductVariant.id) {
                  return Object.assign({}, spv, action.payload.storeProductVariant);
                }
                return spv;
              })
            })
          }),
          isBusy: false
        })
      });

    default:
      return state;
  }
}

export const getIsBusy = (state: State) => state.isBusy;
export const getPaginatedListOfProducts = (state: State) => state.paginatedListOfProducts;
export const getProduct = (state: State) => state.product;
export const getpaginatedListOfProductVariants = (state: State) => state.paginatedListOfProductVariants;
