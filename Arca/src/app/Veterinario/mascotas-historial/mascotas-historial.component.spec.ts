import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotasHistorialComponent } from './mascotas-historial.component';

describe('MascotasHistorialComponent', () => {
  let component: MascotasHistorialComponent;
  let fixture: ComponentFixture<MascotasHistorialComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MascotasHistorialComponent]
    });
    fixture = TestBed.createComponent(MascotasHistorialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
