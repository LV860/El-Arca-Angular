import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MascotasDetailComponent } from './mascotas-detail.component';

describe('MascotasDetailComponent', () => {
  let component: MascotasDetailComponent;
  let fixture: ComponentFixture<MascotasDetailComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MascotasDetailComponent]
    });
    fixture = TestBed.createComponent(MascotasDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
