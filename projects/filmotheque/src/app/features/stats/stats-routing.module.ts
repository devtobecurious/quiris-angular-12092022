import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListStatsComponent } from './list-stats/list-stats.component';

const routes: Routes = [
  {
    path: 'stats:id',
    component: ListStatsComponent,
    data: {}
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StatsRoutingModule { }
