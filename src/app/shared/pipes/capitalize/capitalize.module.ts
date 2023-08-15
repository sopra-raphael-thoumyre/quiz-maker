import { NgModule } from '@angular/core';
import { CapitalizePipe } from './capitalize.pipe';

@NgModule({
  exports: [
    CapitalizePipe,
  ],
  declarations: [
    CapitalizePipe,
  ],
})
export class CapitalizeModule { }
