import { NgModule, Type } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorModule } from './features/error/error.module';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full',
  },
  {
    path: 'error',
    loadChildren: () => import('./features/error/error.module').then((a: { [key: string]: Type<ErrorModule> }) => {
      console.log(a);
      return a['ErrorModule'];
    }),
  },
  {
    path: 'quiz',
    loadChildren: () => import('./features/quiz/quiz.module').then((a: { [key: string]: Type<unknown> }) => a['QuizModule']),
  },
  {
    path: '**',
    redirectTo: 'error',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes),
  ],
  exports: [
    RouterModule,
  ],
})
export class AppRoutingModule { }
