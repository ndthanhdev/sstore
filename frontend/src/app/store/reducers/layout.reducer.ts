import * as layoutActions from '../../store/actions/layout.action';
import {Coordinates} from '../../models/coordinates.model';
/**
 * Created by vunguyenhung on 5/18/17.
 */

export interface State {
  coordinates: Coordinates;
}

export const initialState: State = {
  coordinates: null
};


export function reducer(state: State = initialState, action: layoutActions.Actions): State {
  switch (action.type) {

    case layoutActions.ActionTypes.GET_COORDINATES:
      return Object.assign({}, state, {
        coordinates: action.payload.coordinates,
      });

    default:
      return state;
  }
}

export const getCoordinates = (state: State) => state.coordinates;
