import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListFilmsComponent } from './list-films/list-films.component';
import { LigneFilmComponent } from './ligne-film/ligne-film.component';



@NgModule({
  declarations: [
    ListFilmsComponent,
    LigneFilmComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ListFilmsComponent
  ]
})
export class FilmsModule { }
