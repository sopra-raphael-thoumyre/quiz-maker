import { Directive, ElementRef, Input, OnChanges, Renderer2, SimpleChanges } from '@angular/core';
import { BUTTON_TYPE } from '../../enumerations/button-type.enum';

@Directive({
  selector: '[quizHighlight]',
})
export class HighlightDirective implements OnChanges {
  @Input()
  public quizHighlight: BUTTON_TYPE = BUTTON_TYPE.DEFAULT;

  public constructor(
    private _elementref: ElementRef,
    private _renderer: Renderer2
  ) { }

  public ngOnChanges(changes: SimpleChanges): void {
    if (changes['quizHighlight']) {
      this._renderer.removeClass(this._elementref.nativeElement, BUTTON_TYPE.DEFAULT);
      this._renderer.removeClass(this._elementref.nativeElement, BUTTON_TYPE.GREEN);
      this._renderer.removeClass(this._elementref.nativeElement, BUTTON_TYPE.RED);
      this._renderer.addClass(this._elementref.nativeElement, this.quizHighlight);
    }
  }

}
