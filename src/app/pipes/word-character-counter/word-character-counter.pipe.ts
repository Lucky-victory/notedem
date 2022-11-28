import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'wordCharacterCounter',
  standalone: true,
})
export class WordCharacterCounterPipe implements PipeTransform {
  transform(value: string, countWords = true): number {
    let count = 0;
    if (countWords) {
      count = value?.match(/\w+/gm)?.length;
      return count || 0;
    }
    count = value?.match(/\S/gm)?.length;
    return count || 0;
  }
}
