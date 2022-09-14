import { Component, OnInit } from '@angular/core';
import { PersonDto } from '../models/people';

@Component({
  selector: 'melodie-list-people',
  templateUrl: './list-people.component.html',
  styleUrls: ['./list-people.component.css']
})
export class ListPeopleComponent implements OnInit {
  people: PersonDto[] = [{ nom: 'Luke' }, { nom: 'Leia' }];
  personAEditer !: PersonDto | null;

  constructor() { }

  ngOnInit(): void {
  }

  clickToEdit(item: PersonDto): void {
    this.personAEditer = item;
  }

  finEdition(): void {
    this.personAEditer = null;
  }
}
