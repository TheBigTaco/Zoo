import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'animal-list',
  templateUrl: `src/html/animalList.component.html`
})

export class AnimalListComponent {
  @Input() childAnimalList: Animal[];
}
