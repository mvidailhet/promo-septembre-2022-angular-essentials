import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login-model-driven',
  templateUrl: './login-model-driven.component.html',
  styleUrls: ['./login-model-driven.component.scss']
})
export class LoginModelDrivenComponent {
  loginForm: FormGroup;

  constructor() {
    this.loginForm = new FormGroup({
      userData: new FormGroup({
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, Validators.required),
      }),
      comment: new FormControl(null),
    });
  }

  onSubmit() {
    console.log(this.loginForm);
  }

  get password() {
    return this.loginForm.get('userData.password') as FormControl;
  }

  get email() {
    return this.loginForm.get('userData.email') as FormControl;
  }

}
