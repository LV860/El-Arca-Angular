import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VentasGananciasComponent } from './ventas-ganancias.component';

describe('VentasGananciasComponent', () => {
  let component: VentasGananciasComponent;
  let fixture: ComponentFixture<VentasGananciasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [VentasGananciasComponent]
    });
    fixture = TestBed.createComponent(VentasGananciasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
