import { NgModule } from '@angular/core';
import { UnescapePipe } from './unescape.pipe';

@NgModule({
  exports: [
    UnescapePipe,
  ],
  declarations: [
    UnescapePipe,
  ],
})
export class UnescapeModule { }
