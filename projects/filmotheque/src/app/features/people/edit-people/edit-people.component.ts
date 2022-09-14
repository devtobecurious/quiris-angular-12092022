import { PersonDto } from './../models/people';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'melodie-edit-people',
  templateUrl: './edit-people.component.html',
  styleUrls: ['./edit-people.component.css']
})
export class EditPeopleComponent implements OnInit {
  private _people !: PersonDto;

  @Input() set item(value: PersonDto) {
    this._people = value;
  }

  get item(): PersonDto {
    return this._people;
  }

  @Output() pourAnnuler = new EventEmitter();

  constructor() { }

  ngOnInit(): void {
  }

  clickToAnnuler(): void {
    this.pourAnnuler.emit({});
  }

}
