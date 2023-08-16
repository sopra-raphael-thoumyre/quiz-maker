import { Component } from '@angular/core';

@Component({
  selector: 'quiz-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent {
  public title: string = 'Error 404 page not found.';
}
