import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DecouverteObservableComponent } from './decouverte-observable.component';

describe('DecouverteObservableComponent', () => {
  let component: DecouverteObservableComponent;
  let fixture: ComponentFixture<DecouverteObservableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ DecouverteObservableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DecouverteObservableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
