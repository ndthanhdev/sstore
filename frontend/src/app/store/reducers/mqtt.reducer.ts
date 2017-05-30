/**
 * Created by vunguyenhung on 5/30/17.
 */
import * as mqttActions from '../actions/mqtt.action';


export interface State {
  loading: boolean;
  error: any;
}


export const initialState: State = {
  loading: false,
  error: null,
};

export function reducer(state: State = initialState, action): State {
  switch (action.type) {

    case mqttActions.ActionTypes.START_PRODUCTS_GET:
      return Object.assign({}, state, {
        loading: true,
      });

    case mqttActions.ActionTypes.GET_PRODUCTS:
      return Object.assign({}, state, {
        loading: false
      });

    default:
      return state;
  }

}
