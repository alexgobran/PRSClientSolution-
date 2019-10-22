import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'bool'
})
export class BooldispPipe implements PipeTransform {

  transform(value: Boolean): string {
    return value ? "YES": "NO";
  }

}
