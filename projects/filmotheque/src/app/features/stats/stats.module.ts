import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListStatsComponent } from './list-stats/list-stats.component';
import { StatsRoutingModule } from './stats-routing.module';



@NgModule({
  declarations: [
    ListStatsComponent
  ],
  imports: [
    CommonModule,
    StatsRoutingModule
  ]
})
export class StatsModule { }
