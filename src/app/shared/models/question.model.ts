import { CloneUtils } from '../utils/clone.utils';
import { shuffle } from '../utils/shuffle.utils';

export interface QuestionDto {
  question: string;
  answers: string[];
  correct_answer: string;
  incorrect_answers: string[];
}

export class Question {
  public question: string = '';
  public answers: string[] = [];
  public correctAnswer: string = '';
  public incorrectAnswers: string[] = [];

  public constructor(src: QuestionDto | null) {
    if (src) {
      this.question = CloneUtils.defaultString(src.question);

      this.correctAnswer = CloneUtils.defaultString(src.correct_answer);

      if (this.correctAnswer) {
        this.answers.push(CloneUtils.defaultString(src.correct_answer));
      }

      CloneUtils.defaultArray<string>(src.incorrect_answers).forEach((value: string) => {
        this.incorrectAnswers.push(value);
        this.answers.push(value);
      });

      shuffle(this.answers);
    }
  }
}
