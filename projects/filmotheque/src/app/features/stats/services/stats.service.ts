import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StatsService {

  constructor() { }

  getAll(): Observable<string[]> {
    throw new Error('Not implemented exception');
  }
}
