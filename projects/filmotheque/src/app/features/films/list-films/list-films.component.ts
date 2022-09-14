import { LoggerService } from './../../../shared/services/logger.service';
import { FilmDto } from './../models/film';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { FilmService } from '../services/film.service';
import { Subscription, Observable } from 'rxjs';

// export type IdeeFilms = [
//   { nom: string }
// ];
// const list: IdeeFilms[] = []

@Component({
  selector: 'app-list-films',
  templateUrl: './list-films.component.html',
  styleUrls: ['./list-films.component.css']
})
export class ListFilmsComponent implements OnInit, OnDestroy {
  films: FilmDto[] = [];
  filmObservable$ !: Observable<FilmDto[]>;
  private subscriptionParent = new Subscription();

  constructor(private readonly filmService: FilmService,
    private readonly loggerService: LoggerService) { }


  ngOnDestroy(): void {
    // this.subscriptionParent.unsubscribe();
  }

  ngOnInit(): void {
    this.filmObservable$ = this.filmService.getAll();
    //const jobserve$ = this.filmService.getAll();

    // const monCallBack = (items: FilmDto[]) => this.films = items;
    // const sub = jobserve$.subscribe(monCallBack);
    // jobserve$.subscribe(monCallBack);
    //this.subscriptionParent.add(sub);
  }

  ajouterLigne(nbLignes: number): void {
    for (let i = 0; i < nbLignes; i++) {
      const ligne = { nom: `test${i}`, annee: i, notation: i };

      //this.films.push(ligne);
    }
  }

  supprimerFilm(film: FilmDto): void {
    this.films = [... this.films.filter(item => item.nom != film.nom)];
  }

  get filmsPresents(): boolean {
    return this.films.length > 0;
  }
}
