import {Pipe, PipeTransform} from '@angular/core';
import { AppComponent } from './app.component';
import { Animal } from './animal.model';

@Pipe({
  name: 'youngFilter',
  pure: false
})

export class AgeFilterPipe implements PipeTransform {
  transform(input: Animal[]) {
    let output: Animal[] = [];
    for(let i = 0; i < input.length; i++) {
      if(input[i].age < 2) {
        output.push(input[i]);
      }
    }
    return output;
  }
}
