import { apis } from './../../../../environments/api';
import { FilmDto } from './../models/film';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, map } from 'rxjs';

type FilmResult = {
  title: string
}

type ApiResult = {
  results: FilmResult[]
}

@Injectable({
  providedIn: 'root'
})
export class FilmService {

  constructor(private readonly httpClient: HttpClient) { }

  getAll(): Observable<FilmDto[]> {
    return this.httpClient.get<ApiResult>(apis.films.url).pipe(
      map(result => result.results.map(item => ({ annee: 2000, nom: item.title, notation: 0 })))
    );
  }
}
