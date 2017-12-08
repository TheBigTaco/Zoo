import {Pipe, PipeTransform} from '@angular/core';
import { AppComponent } from './app.component';
import { Animal } from './animal.model';

@Pipe({
  name: 'oldFilter',
  pure: false
})

export class OldFilterPipe implements PipeTransform {
  transform(input: Animal[]) {
    let output: Animal[] = [];
    for(let i = 0; i < input.length; i++) {
      if(input[i].age >= 2) {
        output.push(input[i]);
      }
    }
    return output;
  }
}
