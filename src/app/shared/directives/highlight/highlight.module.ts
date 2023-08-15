import { NgModule } from '@angular/core';
import { HighlightDirective } from './highlight.directive';

@NgModule({
  exports: [
    HighlightDirective,
  ],
  declarations: [
    HighlightDirective,
  ],
})
export class HighlightModule { }
