import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'unescape',
})
export class UnescapePipe implements PipeTransform {
  public transform(str: string): string {
    const doc: Document = new DOMParser().parseFromString(str, 'text/html');
    const result: string | null = doc.documentElement.textContent;

    return result ?? str;
  }
}
