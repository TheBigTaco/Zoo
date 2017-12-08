import { Component } from '@angular/core';
import { Animal } from './animal.model';

@Component({
  selector: 'app-root',
  templateUrl: `src/html/app.component.html`
})

export class AppComponent {
  public masterAnimalList: Animal[] = [
    new Animal("Fox", "Katsu", 2, "Herbivore", "Mountain Area", 3, "Male", "Bob", "Pickles"),
    new Animal("Gorilla", "Bob", 5, "Omnivore", "Amazon Enclosure", 8, "Male", "Kittens", "Katsu")
  ];
}
