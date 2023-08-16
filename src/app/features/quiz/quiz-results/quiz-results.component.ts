import { Component, OnInit } from '@angular/core';
import { QUIZ_STEP } from 'src/app/shared/enumerations/quiz-step.enum';
import { Question } from 'src/app/shared/models/question.model';
import { QuizService } from 'src/app/shared/services/quiz.service';

@Component({
  selector: 'quiz-results',
  templateUrl: './quiz-results.component.html',
})
export class QuizResultsComponent implements OnInit {
  public title: string = 'Results';

  public questions: Question[] = [];

  public readonly QUIZ_STEP: typeof QUIZ_STEP = QUIZ_STEP;

  public constructor(
    private _quizService: QuizService
  ) { }

  public ngOnInit(): void {
    this.questions = this._quizService.questions;
  }
}
