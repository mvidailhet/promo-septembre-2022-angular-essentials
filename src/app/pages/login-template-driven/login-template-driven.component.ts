import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-login-template-driven',
  templateUrl: './login-template-driven.component.html',
  styleUrls: ['./login-template-driven.component.scss']
})
export class LoginTemplateDrivenComponent {

  onSubmit(form: NgForm) {
    console.log(form);
    form.form.patchValue({
      comment: 'test'
    });
  }
}
