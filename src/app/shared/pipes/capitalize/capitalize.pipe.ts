import { Pipe, PipeTransform } from '@angular/core';
import { isString } from '../../utils/types.utils';

@Pipe({
  name: 'capitalize',
})
export class CapitalizePipe implements PipeTransform {
  public transform(str: string): string {
    if (isString(str) && str.length) {
      return str[0].toUpperCase() + (str.length > 1 ? str.slice(1) : '');
    }

    return str;
  }
}
