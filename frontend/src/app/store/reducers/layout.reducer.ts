import * as layoutActions from '../../store/actions/layout.action';
import {Coordinates} from '../../models/coordinates.model';
/**
 * Created by vunguyenhung on 5/18/17.
 */

export interface State {
  coordinates: Coordinates;
  error: any;
}

export const initialState: State = {
  coordinates: null,
  error: null
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

    default:
      return state;
  }
}

export const getCoordinates = (state: State) => state.coordinates;
