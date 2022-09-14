import { StatsModule } from './features/stats/stats.module';
import { PeopleModule } from './features/people/people.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FilmsModule } from './features/films/films.module';
import { MenuComponent } from './menu/menu.component';
import { HttpClientModule } from '@angular/common/http';
import { DecouverteObservableComponent } from './shared/ui/decouverte-observable/decouverte-observable.component';
import { HomeComponent } from './accueil/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FilmsModule,
    PeopleModule,
    DecouverteObservableComponent,
    StatsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
