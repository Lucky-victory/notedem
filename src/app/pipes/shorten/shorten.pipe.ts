import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'shorten',

  standalone: true,
})
export class ShortenPipe implements PipeTransform {
  transform(text: string, limit = 100): string {
    return text?.length > limit ? text?.substring(0, limit) + '...' : text;
  }
}
