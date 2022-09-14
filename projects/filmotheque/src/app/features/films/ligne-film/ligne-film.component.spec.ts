import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LigneFilmComponent } from './ligne-film.component';

describe('LigneFilmComponent', () => {
  let component: LigneFilmComponent;
  let fixture: ComponentFixture<LigneFilmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LigneFilmComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LigneFilmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
