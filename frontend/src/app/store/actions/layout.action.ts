import {type} from '../../util/helper';
import {Action} from '@ngrx/store';
import {Coordinates} from '../../models/coordinates.model';
import {CheckoutProgress} from '../../models/checkout-progress.model';
/**
 * Created by vunguyenhung on 5/5/17.
 */

export const ActionTypes = {
  START_NOTIFY: type('[Layout] Start Notify'),
  NOTIFY_SUCCESS: type('[Layout] Notify Success'),
  START_COORDINATES_GET: type('[Layout] Start Coordinates Get'),

  GET_COORDINATES: type('[Layout] Get Coordinates'),
  GET_COORDINATES_FAIL: type('[Layout] Get Coordinates Fail'),

  SET_DELIVERY_COORDINATES: type('[Layout] Set Delivery Coordinates'),

  SET_CHECKOUT_PROGRESS: type('[Layout] Set Checkout Progress'),
  SET_CHECKOUT_DONE_MSG: type('[Layout] Set Checkout Done Message'),
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
export class GetCoordinatesFailAction implements Action {
  type = ActionTypes.GET_COORDINATES_FAIL;

  constructor(public payload: { error: any }) {
  }
}
export class SetDeliveryCoordinatesAction implements Action {
  type = ActionTypes.SET_DELIVERY_COORDINATES;

  constructor(public payload: { deliveryCoordinates: any }) {
  }
}
export class SetCheckoutProgressAction implements Action {
  type = ActionTypes.SET_CHECKOUT_PROGRESS;

  constructor(public payload: { checkoutProgress: CheckoutProgress }) {
  }
}

export class SetCheckoutDoneMsgAction implements Action {
  type = ActionTypes.SET_CHECKOUT_DONE_MSG;

  constructor(public payload: { doneMsg: string }) {
  }
}

export type Actions
  = StartNotifyAction
  | NotifySuccessAction
  | StartCoordinatesGetAction
  | GetCoordinatesAction
  | GetCoordinatesFailAction
  | SetDeliveryCoordinatesAction
  | SetCheckoutProgressAction
  | SetCheckoutDoneMsgAction;
