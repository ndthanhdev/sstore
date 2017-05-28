import * as layoutActions from '../../store/actions/layout.action';
import {Coordinates} from '../../models/coordinates.model';
import {GOOGLE_MAPS} from '../../util/app.constants';
import {CheckoutProgress} from '../../models/checkout-progress.model';
/**
 * Created by vunguyenhung on 5/18/17.
 */

export interface State {
  coordinates: Coordinates;
  error: any;
  deliveryCoordinates: Coordinates;
  checkoutProgress: CheckoutProgress;
}

export const initialState: State = {
  coordinates: null,
  error: null,
  deliveryCoordinates: GOOGLE_MAPS.HCMC_LOCATION,
  checkoutProgress: CheckoutProgress.NONE
};


export function reducer(state: State = initialState, action: layoutActions.Actions): State {
  switch (action.type) {

    case layoutActions.ActionTypes.GET_COORDINATES:
      return Object.assign({}, state, {
        coordinates: action.payload.coordinates,
      });

    case layoutActions.ActionTypes.GET_COORDINATES_FAIL:
      return Object.assign({}, state, {
        error: action.payload.error,
      });

    case layoutActions.ActionTypes.SET_DELIVERY_COORDINATES:
      return Object.assign({}, state, {
        deliveryCoordinates: action.payload.deliveryCoordinates
      });

    case layoutActions.ActionTypes.SET_CHECKOUT_PROGRESS:
      return Object.assign({}, state, {
        checkoutProgress: action.payload.checkoutProgress
      });

    default:
      return state;
  }
}

export const getCoordinates = (state: State) => state.coordinates;
export const getDeliveryCoordinates = (state: State) => state.deliveryCoordinates;
export const getCheckoutProgress = (state: State) => state.checkoutProgress;
