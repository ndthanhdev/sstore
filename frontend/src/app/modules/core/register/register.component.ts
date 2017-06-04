import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'frontend-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  genders = [
    {value: 0, name: 'Male'},
    {value: 0, name: 'Female'},
    {value: 0, name: 'Others'}
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

  ngOnInit() {
  }

  private formGroupHasDanger(groupName: string): boolean {
    return !(this.registerForm.get(groupName).valid || this.registerForm.get(groupName).untouched);
  }

}
