import {Component, OnDestroy} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FileItem, FileUploader} from 'ng2-file-upload';
import {Subscription} from 'rxjs/Subscription';
import {Store} from '@ngrx/store';

import * as fromRoot from '../../../store/reducers';
import * as imageActions from '../../../store/actions/image.action';

@Component({
  selector: 'frontend-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnDestroy {

  registerForm: FormGroup;

  public uploader: FileUploader = new FileUploader({url: 'http://127.0.0.1/files/upload'});
  public hasBaseDropZoneOver = false;

  public url: string = null;
  public urlSub: Subscription;

  public loading = false;
  public loadingSub: Subscription;

  genders = [
    {value: 0, name: 'Male'},
    {value: 1, name: 'Female'},
    {value: 2, name: 'Others'},
  ];

  constructor(private store: Store<fromRoot.State>,
              private formBuilder: FormBuilder) {
    this.loadingSub = this.store.select(fromRoot.getImageLoading).subscribe(loading => this.loading = loading);
    this.urlSub = this.store.select(fromRoot.getImageUrl).subscribe(url => this.url = url);
    this.registerForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', Validators.required],
      address: '',
      dob: '',
      tel: '',
      gender: '',
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
  }

  public fileOverBase(e: any): void {
    this.hasBaseDropZoneOver = e;
  }

  dropImage($event) {
    if (this.uploader.queue.length > 1) {
      this.uploader.queue = this.uploader.queue.slice(1);
    }
  }

  public uploadItem(item: FileItem) {
    item.onBeforeUpload = () => {
      this.store.dispatch(new imageActions.StartImageUploadAction());
    };

    item.onSuccess = (response, status, headers) => {
      this.store.dispatch(new imageActions.UploadImageAction({url: response}));
      this.store.dispatch(new imageActions.UploadImageSuccessAction());
    };

    item.upload();
  }

  private formGroupHasDanger(groupName: string): boolean {
    return !(this.registerForm.get(groupName).valid || this.registerForm.get(groupName).untouched);
  }

  resetButtonClicked() {
    this.registerForm.reset();
  }

  ngOnDestroy(): void {
    this.urlSub.unsubscribe();
    this.loadingSub.unsubscribe();
  }

}
