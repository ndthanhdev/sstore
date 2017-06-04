import {type} from '../../util/helper';
import {Action} from '@ngrx/store';
/**
 * Created by vunguyenhung on 6/4/17.
 */

export const ActionTypes = {
  START_IMAGE_UPLOAD: type('[Image] Start Image Upload'),
  UPLOAD_IMAGE: type('[Image] Upload Image'),
  UPLOAD_IMAGE_SUCCESS: type('[Image] Upload Image Success')
};


export class StartImageUploadAction implements Action {
  type = ActionTypes.START_IMAGE_UPLOAD;
}

export class UploadImageAction implements Action {
  type = ActionTypes.UPLOAD_IMAGE;

  constructor(public payload: { url: string }) {
  }
}

export class UploadImageSuccessAction implements Action {
  type = ActionTypes.UPLOAD_IMAGE_SUCCESS;
}

export type Actions =
  UploadImageAction |
  StartImageUploadAction |
  UploadImageSuccessAction;
