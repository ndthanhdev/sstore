import * as layoutActions from '../../store/actions/layout.action';
import {Coordinates} from '../../models/coordinates.model';
import {GOOGLE_MAPS} from '../../util/app.constants';
/**
 * Created by vunguyenhung on 5/18/17.
 */

export interface State {
  coordinates: Coordinates;
  error: any;
  deliveryCoordinates: Coordinates;
}

export const initialState: State = {
  coordinates: null,
  error: null,
  deliveryCoordinates: GOOGLE_MAPS.HCMC_LOCATION
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

    default:
      return state;
  }
}

export const getCoordinates = (state: State) => state.coordinates;
export const getDeliveryCoordinates = (state: State) => state.deliveryCoordinates;
