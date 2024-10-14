import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMascotasComponent } from './add-mascotas.component';

describe('AddMascotasComponent', () => {
  let component: AddMascotasComponent;
  let fixture: ComponentFixture<AddMascotasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddMascotasComponent]
    });
    fixture = TestBed.createComponent(AddMascotasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
