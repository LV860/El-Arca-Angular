import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalTratamientosComponent } from './total-tratamientos.component';

describe('TotalTratamientosComponent', () => {
  let component: TotalTratamientosComponent;
  let fixture: ComponentFixture<TotalTratamientosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TotalTratamientosComponent]
    });
    fixture = TestBed.createComponent(TotalTratamientosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
