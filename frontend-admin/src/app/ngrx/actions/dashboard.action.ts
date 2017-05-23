import {type} from "../../util/helper";
import {Action} from "@ngrx/store";

export const ActionTypes = {

  START_LOAD: type('[Dashboard] Start Load'),
  LOAD: type('[Dashboard] Load'),

  START_NOUSERS_LOAD: type('[Dashboard] Start NoUsers Load'),
  LOAD_NOUSERS: type('[Dashboard] Load NoUsers'),

};


export class StartNoUsersLoadAction implements Action {
  type = ActionTypes.START_NOUSERS_LOAD;

  constructor(public payload?) {
  }
}

export class LoadNoUsersAction implements Action {
  type = ActionTypes.LOAD_NOUSERS;

  constructor(public payload:{ noUsers:number }) {
  }
}
