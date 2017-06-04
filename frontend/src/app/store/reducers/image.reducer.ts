import {ActionTypes} from '../actions/image.action';
/**
 * Created by vunguyenhung on 6/4/17.
 */


export interface State {
  url: string | null;
  loading: boolean;
}

export const initialState = {
  loading: false,
  url: null
};

export function reducer(state: State = initialState, action): State {
  switch (action.type) {
    case ActionTypes.START_IMAGE_UPLOAD:
      return Object.assign({}, state, {loading: true});

    case ActionTypes.UPLOAD_IMAGE:
      return Object.assign({}, state, {url: action.payload.url});

    case ActionTypes.UPLOAD_IMAGE_SUCCESS:
      return Object.assign({}, state, {loading: false});

    default:
      return state;
  }

}

export const getUrl = (state) => state.url;
export const getLoading = (state: State) => state.loading;





