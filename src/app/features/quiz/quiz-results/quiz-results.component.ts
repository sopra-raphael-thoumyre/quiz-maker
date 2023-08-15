import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Question } from 'src/app/shared/models/question.model';
import { QuizService } from 'src/app/shared/services/quiz.service';

@Component({
  selector: 'quiz-results',
  templateUrl: './quiz-results.component.html',
})
export class QuizResultsComponent implements OnInit {
  public title: string = 'Results';

  public questions: Question[] = [];

  public constructor(
    private _router: Router,
    private _quizService: QuizService
  ) { }

  public ngOnInit(): void {
    this.questions = this._quizService.questions;

    if (!this.questions.length) {
      this._router.navigate(['/creation']);
    }
  }
}
