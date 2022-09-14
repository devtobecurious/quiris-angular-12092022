import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPeopleComponent } from './list-people/list-people.component';
import { EditPeopleComponent } from './edit-people/edit-people.component';
import { FormsModule } from '@angular/forms';
import { PeopleRoutingModule } from './people-routing.module';



@NgModule({
  declarations: [
    ListPeopleComponent,
    EditPeopleComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    PeopleRoutingModule
  ],
  exports: [
    ListPeopleComponent
  ]
})
export class PeopleModule { }
