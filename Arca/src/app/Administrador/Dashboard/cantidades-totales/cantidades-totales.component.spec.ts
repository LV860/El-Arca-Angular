import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CantidadesTotalesComponent } from './cantidades-totales.component';

describe('CantidadesTotalesComponent', () => {
  let component: CantidadesTotalesComponent;
  let fixture: ComponentFixture<CantidadesTotalesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CantidadesTotalesComponent]
    });
    fixture = TestBed.createComponent(CantidadesTotalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
