import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'edit-animal',
  templateUrl: `src/html/animalEdit.component.html`
})

export class EditAnimalComponent {
  @Input() childSelectedAnimal: Animal;
  @Output() doneSender = new EventEmitter();

  childEditAnimal(name: string, age: number, caretakers: number) {
    this.childSelectedAnimal.name = name;
    this.childSelectedAnimal.age = age;
    this.childSelectedAnimal.caretakers = caretakers;
  }

  doneButtonClicked() {
    this.doneSender.emit();
  }
}
