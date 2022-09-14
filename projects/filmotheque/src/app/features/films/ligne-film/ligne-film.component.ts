import { FilmDto } from './../models/film';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-ligne-film',
  templateUrl: './ligne-film.component.html',
  styleUrls: ['./ligne-film.component.css']
})
export class LigneFilmComponent implements OnInit {
  @Input() film: FilmDto | undefined; //{ nom: '123', annee: 1234, notation: 1 };
  @Input() titreBouton = '';

  @Output() clickToSuppr = new EventEmitter<FilmDto>();

  constructor() { }

  ngOnInit(): void {
  }

  clickToDel(): void {
    this.clickToSuppr.emit(this.film);
    // this.clickToSuppr.emit(this.film);
  }

}
