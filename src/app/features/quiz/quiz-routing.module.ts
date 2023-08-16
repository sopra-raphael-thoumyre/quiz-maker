import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { QuizComponent } from './quiz.component';
import { QuizResultsComponent } from './quiz-results/quiz-results.component';
import { categoryResolver } from 'src/app/shared/resolvers/category.resolver';
import { QuizCreationComponent } from './quiz-creation/quiz-creation.component';
import { hasAnswersAndQuestionsGuard } from 'src/app/shared/guards/has-answers-and-questions.guard';

const routes: Routes = [
  {
    path: '',
    component: QuizComponent,
    children: [
      {
        path: '',
        redirectTo: 'creation',
        pathMatch: 'full',
      },
      {
        path: 'creation',
        component: QuizCreationComponent,
        resolve: {
          categories: categoryResolver,
        },
      },
      {
        path: 'results',
        component: QuizResultsComponent,
        canActivate: [hasAnswersAndQuestionsGuard],
      },
    ],
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class MainRoutingModule { }
