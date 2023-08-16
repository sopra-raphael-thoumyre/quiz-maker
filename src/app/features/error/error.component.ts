import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'quiz-error',
  templateUrl: './error.component.html',
})
export class ErrorComponent {
  public title: string = 'Error 404 page not found.';

  public constructor(
    private _router: Router
  ) { }

  public newQuiz(): void {
    this._router.navigate(['/creation']);
  }
}
