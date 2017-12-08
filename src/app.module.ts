import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { AnimalListComponent } from './animalList.component';
import { AddAnimalComponent } from './addAnimal.component';
import { EditAnimalComponent } from './animalEdit.component';
import { AgeFilterPipe } from './ageFilter.pipe';
import { OldFilterPipe } from './oldFilter.pipe';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, AnimalListComponent, AddAnimalComponent, EditAnimalComponent, AgeFilterPipe, OldFilterPipe],
  bootstrap: [AppComponent]
})

export class AppModule {}
