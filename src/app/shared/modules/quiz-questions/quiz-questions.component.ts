import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Question } from 'src/app/shared/models/question.model';
import { QuizService } from '../../services/quiz.service';

@Component({
  selector: 'quiz-questions',
  templateUrl: './quiz-questions.component.html',
  styleUrls: ['./quiz-questions.component.scss'],
})
export class QuizQuestionsComponent implements OnChanges {
  @Input()
  public title: string = '';

  @Input()
  public questions: Question[] = [];

  @Input({ required: true })
  public step: 'questions' | 'answers' = 'questions';

  public quizForm: FormGroup = new FormGroup({});

  public get resultMsg(): string {
    return 'You scored ' + this.correctAnswers + ' out of ' + this.questions.length;
  }

  public correctAnswers: number = 0;

  public constructor(
    private _router: Router,
    private _quizService: QuizService
  ) { }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['questions']) {
      this.quizForm = new FormGroup({});
      this.correctAnswers = 0;

      this.questions.forEach((question: Question, index: number) => {
        let value: string | null = null;

        if (this._quizService.answers && this.step === 'answers') {
          value = this._quizService.answers['Q' + index];

          if (value === question.correctAnswer) {
            ++this.correctAnswers;
          }
        }

        this.quizForm.addControl('Q' + index, new FormControl<string | null>(value, Validators.required));
      });
    }
  }

  public selectAnswer(ctrlIndex: number, answer: string): void {
    if (this.step === 'questions') {
      const ctrl: AbstractControl | null = this.quizForm.get('Q' + ctrlIndex);

      if (ctrl) {
        if (ctrl.value === answer) {
          ctrl.patchValue(null);
        } else {
          ctrl.patchValue(answer);
        }
      }
    }
  }

  public highlightColor(ctrlIndex: number, answer: string): 'red' | 'green' | '' {
    const ctrl: AbstractControl | null = this.quizForm.get('Q' + ctrlIndex);
    const question: Question | null = this.questions.length > ctrlIndex ? this.questions[ctrlIndex] : null;

    if (this.step === 'questions') {
      return ctrl?.value === answer ? 'green' : '';
    } else {
      if (answer === question?.correctAnswer) {
        return 'green';
      }

      if (ctrl?.value === answer) {
        return 'red';
      }
    }

    return '';
  }

  public validateAnswers(): void {
    if (this.step === 'questions') {
      this._quizService.answers = this.quizForm.getRawValue();

      this._router.navigate(['/results']);
    }
  }

  public newQuiz(): void {
    this._router.navigate(['/creation']);
  }
}
