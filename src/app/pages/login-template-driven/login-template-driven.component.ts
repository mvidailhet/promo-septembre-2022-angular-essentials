import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { CanComponentDeactivate } from 'src/app/guards/can-deactivate.guard';

@Component({
  selector: 'app-login-template-driven',
  templateUrl: './login-template-driven.component.html',
  styleUrls: ['./login-template-driven.component.scss']
})
export class LoginTemplateDrivenComponent implements CanComponentDeactivate {
  @ViewChild('f') form?: NgForm;

  onSubmit(form: NgForm) {
    form.form.patchValue({
      comment: 'test'
    });
  }

  canDeactivate(): boolean | Observable<boolean> | Promise<boolean> {
    if (!this.form || this.form.pristine === null || this.form.pristine) return true;
    return confirm('Es-tu certaine de vouloir quitter la page sans suvegarder ?');
  };
}
