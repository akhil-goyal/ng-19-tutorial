import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'checkempty',
})
export class CheckemptyPipe implements PipeTransform {
  transform(value: unknown): unknown {
    if (value == null || value == '' || value == undefined) {
      return 'N/A';
    } else {
      return value;
    }
  }
}
