import { Component } from '@angular/core';

@Component({
  selector: 'quiz-root',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss'],
})
export class QuizComponent {
  public title: string = 'Quiz Maker';
}
