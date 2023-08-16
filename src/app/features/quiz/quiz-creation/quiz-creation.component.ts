import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { Category } from 'src/app/shared/models/category.model';
import { Question } from 'src/app/shared/models/question.model';
import { QuestionRepository } from 'src/app/shared/repositories/question.repository';
import { QuizService } from 'src/app/shared/services/quiz.service';
import { isArray } from 'src/app/shared/utils/types.utils';

interface CreateForm {
  category: string | null;
  difficulty: string | null;
}

@Component({
  selector: 'quiz-creation',
  templateUrl: './quiz-creation.component.html',
})
export class QuizCreationComponent implements OnInit {
  public title: string = 'Questions';

  public createForm: FormGroup = new FormGroup({
    category: new FormControl<string | null>(null, Validators.required),
    difficulty: new FormControl<string | null>(null, Validators.required),
  });

  public questions: Question[] = [];
  public categories: Category[] = [];

  public readonly DIFFICULTIES: string[] = [
    'easy',
    'medium',
    'hard',
  ];

  public constructor(
    private _activatedRoute: ActivatedRoute,
    private _questionRepository: QuestionRepository,
    private _quizService: QuizService
  ) { }

  public ngOnInit(): void {
    this.categories = isArray(this._activatedRoute.snapshot.data['categories'])
      ? this._activatedRoute.snapshot.data['categories'] as Category[] : [];

    this._quizService.questions = [];
    this._quizService.answers = null;
  }

  public createQuiz(): void {
    if (this.createForm.valid) {
      const createForm: CreateForm = this.createForm.getRawValue();

      this._questionRepository.getQuestions(createForm.category, createForm.difficulty).subscribe({
        next: (questions: Question[]) => {
          this.questions = questions;
        },
        error: () => {
          this.questions = [];
        },
      });
    }
  }
}
