import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StatsService } from '../services/stats.service';

@Component({
  selector: 'melodie-list-stats',
  templateUrl: './list-stats.component.html',
  styleUrls: ['./list-stats.component.css']
})
export class ListStatsComponent implements OnInit {
  items: string[] = [];

  constructor(private service: StatsService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.router.navigate(['films']);

    this.route.params.subscribe(item => {
      const idP = item['id'];
    });
    const id = this.route.snapshot.params['id'];
  }

}
