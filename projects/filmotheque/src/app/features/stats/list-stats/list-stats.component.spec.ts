import { StatsService } from './../services/stats.service';
import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListStatsComponent } from './list-stats.component';
import { Observable, of } from 'rxjs';

fdescribe('ListStatsComponent', () => {
  let component: ListStatsComponent;
  let fixture: ComponentFixture<ListStatsComponent>;

  beforeAll(() => {

  });

  beforeEach(async () => {
    const unService: StatsService = {
      getAll(): Observable<string[]> {
        return of(['']);
      }
    }
    await TestBed.configureTestingModule({
      declarations: [ListStatsComponent],
      imports: [],
      providers: [
        { provide: StatsService, useValue: unService }
      ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ListStatsComponent);
    component = fixture.componentInstance;

    //fixture.autoDetectChanges(true);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });


  it('should get 2 rows stats', () => {
    // Arrange
    component.items = ['', ''];
    fixture.detectChanges();

    // Act
    const table = fixture.nativeElement.querySelector('table');

    // Assert
    expect(table).toBeTruthy();
    expect(table.rows.length).toBe(2);
  });

});
