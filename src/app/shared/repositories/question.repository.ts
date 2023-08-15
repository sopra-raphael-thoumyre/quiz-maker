import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { GenericObject, isArray } from '../utils/types.utils';
import { Question, QuestionDto } from '../models/question.model';
import { QuizService } from '../services/quiz.service';

@Injectable()
export class QuestionRepository {
  private readonly _QUESTIONS_URL: string = environment.questionsUrl;

  public constructor(
    private _httpClient: HttpClient,
    private _quizService: QuizService
  ) { }

  public getQuestions(category: string | null, difficulty: string | null): Observable<Question[]> {
    const url: string = `${this._QUESTIONS_URL}?amount=5&category=${category}&difficulty=${difficulty}&type=multiple`;

    return this._httpClient.get<GenericObject<number | QuestionDto[]>>(url).pipe(
      map((value: GenericObject<number | QuestionDto[]>) => {
        this._quizService.questions = [];

        if (value && value['response_code'] === 0 && isArray(value['results'])) {
          this._quizService.questions = value['results'].map((question: QuestionDto) => new Question(question));
        }

        return this._quizService.questions;
      })
    );
  }
}
