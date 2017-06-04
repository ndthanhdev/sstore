import {Component} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {FileItem, FileUploader} from 'ng2-file-upload';

@Component({
  selector: 'frontend-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {

  registerForm: FormGroup;

  public uploader: FileUploader = new FileUploader({url: 'http://127.0.0.1/files/upload'});
  public hasBaseDropZoneOver = false;

  genders = [
    {value: 0, name: 'Male'},
    {value: 1, name: 'Female'},
    {value: 2, name: 'Others'},
  ];

  constructor(private formBuilder: FormBuilder) {
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
      // this.store.dispatch(new imageAction.StartImageUploadAction());
    };

    item.onSuccess = (response, status, headers) => {
      // this.store.dispatch(new imageAction.UploadImageAction({url: this.extractURLFromResponseString(response)}));
      // this.store.dispatch(new imageAction.UploadImageSuccessAction());
    };

    item.upload();
  }

  private formGroupHasDanger(groupName: string): boolean {
    return !(this.registerForm.get(groupName).valid || this.registerForm.get(groupName).untouched);
  }

}
