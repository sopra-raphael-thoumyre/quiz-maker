import { NgModule, Type } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorModule } from './features/error/error.module';
import { QuizModule } from './features/quiz/quiz.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'quiz',
    pathMatch: 'full',
  },
  {
    path: 'error',
    loadChildren: () => import('./features/error/error.module').then((a: { [key: string]: Type<ErrorModule> }) => a['ErrorModule']),
  },
  {
    path: 'quiz',
    loadChildren: () => import('./features/quiz/quiz.module').then((a: { [key: string]: Type<QuizModule> }) => a['QuizModule']),
  },
  {
    path: '**',
    redirectTo: 'error',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { useHash: true }),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }
