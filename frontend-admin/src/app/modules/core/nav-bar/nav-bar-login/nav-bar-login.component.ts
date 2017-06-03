import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'frontend-admin-nav-bar-login',
  templateUrl: './nav-bar-login.component.html',
  styleUrls: ['./nav-bar-login.component.scss']
})
export class NavBarLoginComponent implements OnInit {

  @Input() loading: boolean;
  @Output() loginButtonClicked = new EventEmitter();

  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }

  onLoginButtonClick() {
    if (this.loginForm.valid) {
      this.loginButtonClicked.emit({
        username: this.loginForm.get('username').value,
        password: this.loginForm.get('password').value
      });

    }
  }

  ngOnInit() {
  }

}
