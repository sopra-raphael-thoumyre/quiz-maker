import { NgModule } from '@angular/core';
import { QuizComponent } from './quiz.component';
import { MainRoutingModule } from './quiz-routing.module';
import { CommonModule } from '@angular/common';
import { QuizResultsComponent } from './quiz-results/quiz-results.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CategoryRepository } from 'src/app/shared/repositories/category.repository';
import { HttpClientModule } from '@angular/common/http';
import { CapitalizeModule } from 'src/app/shared/pipes/capitalize/capitalize.module';
import { QuestionRepository } from 'src/app/shared/repositories/question.repository';
import { UnescapeModule } from 'src/app/shared/pipes/unescape/unescape.module';
import { HighlightModule } from 'src/app/shared/directives/highlight/highlight.module';
import { QuizCreationComponent } from './quiz-creation/quiz-creation.component';
import { QuizQuestionsModule } from 'src/app/shared/modules/quiz-questions/quiz-questions.module';
import { QuizService } from 'src/app/shared/services/quiz.service';

@NgModule({
  declarations: [
    QuizComponent,
    QuizCreationComponent,
    QuizResultsComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HttpClientModule,

    // Modules
    QuizQuestionsModule,

    // Pipes
    CapitalizeModule,
    UnescapeModule,

    // Directives
    HighlightModule,

    MainRoutingModule,
  ],
  providers: [
    QuizService,
    CategoryRepository,
    QuestionRepository,
  ],
})
export class QuizModule { }
