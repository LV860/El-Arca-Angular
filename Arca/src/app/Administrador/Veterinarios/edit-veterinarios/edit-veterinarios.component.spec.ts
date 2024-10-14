import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditVeterinariosComponent } from './edit-veterinarios.component';

describe('EditVeterinariosComponent', () => {
  let component: EditVeterinariosComponent;
  let fixture: ComponentFixture<EditVeterinariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [EditVeterinariosComponent]
    });
    fixture = TestBed.createComponent(EditVeterinariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
