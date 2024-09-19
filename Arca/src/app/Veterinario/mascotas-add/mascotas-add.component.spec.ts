import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotasAddComponent } from './mascotas-add.component';

describe('MascotasAddComponent', () => {
  let component: MascotasAddComponent;
  let fixture: ComponentFixture<MascotasAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MascotasAddComponent]
    });
    fixture = TestBed.createComponent(MascotasAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
