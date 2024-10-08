import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotasClienteComponent } from './mascotas-cliente.component';

describe('MascotasClienteComponent', () => {
  let component: MascotasClienteComponent;
  let fixture: ComponentFixture<MascotasClienteComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MascotasClienteComponent]
    });
    fixture = TestBed.createComponent(MascotasClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
