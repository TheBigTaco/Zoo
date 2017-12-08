import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  templateUrl: `src/html/app.component.html`
})

export class AppComponent {
  public masterAnimalList: Animal[] = [
    new Animal("Fox", "Katsu", 1, "Herbivore", "Mountain Area", 3, "Male", "Bob", "Pickles"),
    new Animal("Gorilla", "Bob", 5, "Omnivore", "Amazon Enclosure", 8, "Male", "Kittens", "Katsu")
  ];
  public selectedAnimal: Animal = null;
  public filter: string = "all";
  constructor() {
    console.log(this.filter)
  }

  addAnimal(animal: Animal) {
    this.masterAnimalList.push(animal);
  }

  editAnimal(clickedAnimal: Animal) {
    this.selectedAnimal = clickedAnimal;
  }

  done() {
    this.selectedAnimal = null;
  }
}
