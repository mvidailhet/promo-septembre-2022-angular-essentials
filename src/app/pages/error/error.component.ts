import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss']
})
export class ErrorComponent {
  message: string = '';

  constructor(private activatedRoute: ActivatedRoute) {
    this.message = this.activatedRoute.snapshot.data['message'];
  }
}
