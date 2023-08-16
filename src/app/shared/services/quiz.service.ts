import { Injectable } from '@angular/core';
import { Question } from '../models/question.model';
import { GenericObject } from '../utils/types.utils';

@Injectable()
export class QuizService {
  public questions: Question[] = [];
  public answers: GenericObject<string> | null = null;

  public hasAnswersAndQuestions(): boolean {
    return this.questions.length > 0
      && this.answers !== null
      && Object.keys(this.answers).length === this.questions.length;
  }
}
