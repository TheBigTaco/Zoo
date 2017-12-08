import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'add-animal',
  templateUrl: `src/html/addAnimal.component.html`
})

export class AddAnimalComponent {
  @Output() addAnimalSender = new EventEmitter();

  addButtonClicked(species: string, name: string, age: number, diet: string, location: string, caretakers:number, sex: string, likes: string, dislikes: string) {
    let animal = new Animal(species, name, age, diet, location, caretakers, sex, likes, dislikes);
    this.addAnimalSender.emit(animal);
  }
}
