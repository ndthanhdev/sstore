import {type} from '../../util/helper';
import {Action} from '@ngrx/store';
/**
 * Created by vunguyenhung on 5/5/17.
 */

export const ActionTypes = {
  START_NOTIFY: type('[Layout] Start Notify'),
  NOTIFY_SUCCESS: type('[Layout] Notify Success'),
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

export type Actions = StartNotifyAction | NotifySuccessAction;
