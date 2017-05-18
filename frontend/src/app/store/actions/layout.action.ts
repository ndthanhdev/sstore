import {type} from '../../util/helper';
import {Action} from '@ngrx/store';
import {Coordinates} from '../../models/coordinates.model';
/**
 * Created by vunguyenhung on 5/5/17.
 */

export const ActionTypes = {
  START_NOTIFY: type('[Layout] Start Notify'),
  NOTIFY_SUCCESS: type('[Layout] Notify Success'),
  START_COORDINATES_GET: type('[Layout] Start Coordinates Get'),
  GET_COORDINATES: type('[Layout] Get Coordinates'),
};

export class StartNotifyAction implements Action {
  type = ActionTypes.START_NOTIFY;

  constructor(public payload: { type: string, message: string }) {
  }
}

export class NotifySuccessAction implements Action {
  type = ActionTypes.NOTIFY_SUCCESS;

  constructor(public payload: { message: string }) {
  }
}

export class StartCoordinatesGetAction implements Action {
  type = ActionTypes.START_COORDINATES_GET;

  constructor(public payload?) {
  }
}

export class GetCoordinatesAction implements Action {
  type = ActionTypes.GET_COORDINATES;

  constructor(public payload: { coordinates: Coordinates }) {
  }
}

export type Actions
  = StartNotifyAction
  | NotifySuccessAction
  | StartCoordinatesGetAction
  | GetCoordinatesAction;
