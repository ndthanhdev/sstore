import {Component, OnDestroy} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FileItem, FileUploader} from 'ng2-file-upload';
import {Subscription} from 'rxjs/Subscription';
import {Store} from '@ngrx/store';

import * as fromRoot from '../../../store/reducers';
import * as imageActions from '../../../store/actions/image.action';
import * as authActions from '../../../store/actions/auth.action';
import {User} from 'app/models/user.model';
import {Observable} from 'rxjs/Observable';

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

  public imageLoading = false;
  public imageLoadingSub: Subscription;

  public authLoading: Observable<boolean>;

  genders = [
    {value: 0, name: 'Male'},
    {value: 1, name: 'Female'},
    {value: 2, name: 'Others'},
  ];

  constructor(private store: Store<fromRoot.State>,
              private formBuilder: FormBuilder) {

    this.imageLoadingSub = this.store.select(fromRoot.getImageLoading).subscribe(loading => this.imageLoading = loading);

    this.urlSub = this.store.select(fromRoot.getImageUrl).subscribe(url => this.url = url);

    this.authLoading = this.store.select(fromRoot.getAuthLoading);

    this.registerForm = this.formBuilder.group({
      fullName: ['', Validators.required],
      email: ['', Validators.required],
      address: '',
      dob: ['', Validators.required],
      tel: '',
      gender: 0,
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

  onSaveButtonClicked() {
    const user = new User({
      full_name: this.registerForm.get('fullName').value,
      dob: this.registerForm.get('dob').value,
      tel: this.registerForm.get('tel').value,
      address: this.registerForm.get('address').value,
      email: this.registerForm.get('email').value,
      avatar: this.url,
      gender: this.registerForm.get('gender').value,
      username: this.registerForm.get('username').value,
      password: this.registerForm.get('password').value
    });
    this.store.dispatch(new authActions.StartRegisterAction({user: user}));
  }

  ngOnDestroy(): void {
    this.urlSub.unsubscribe();
    this.imageLoadingSub.unsubscribe();
  }

}
