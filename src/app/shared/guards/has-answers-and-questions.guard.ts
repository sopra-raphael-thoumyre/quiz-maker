import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { QuizService } from '../services/quiz.service';

export const hasAnswersAndQuestionsGuard: CanActivateFn = () => {
  const quizService: QuizService = inject(QuizService);

  if (quizService.hasAnswersAndQuestions()) {
    return true;
  }

  return false;
};
