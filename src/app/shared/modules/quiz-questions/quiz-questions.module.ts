import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { UnescapeModule } from 'src/app/shared/pipes/unescape/unescape.module';
import { HighlightModule } from 'src/app/shared/directives/highlight/highlight.module';
import { QuizQuestionsComponent } from './quiz-questions.component';

@NgModule({
  exports: [
    QuizQuestionsComponent,
  ],
  declarations: [
    QuizQuestionsComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,

    // Pipes
    UnescapeModule,

    // Directives
    HighlightModule,
  ],
})
export class QuizQuestionsModule { }
