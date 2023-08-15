import { Directive, ElementRef, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
  selector: '[quizHighlight]',
})
export class HighlightDirective implements OnChanges {
  @Input()
  public quizHighlight: 'red' | 'green' | '' = '';

  public constructor(
    private _elementref: ElementRef
  ) { }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['quizHighlight']) {
      this._elementref.nativeElement.style.backgroundColor = this.quizHighlight;
    }
  }

}
