import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TableVeterinariosComponent } from './table-veterinarios.component';

describe('TableVeterinariosComponent', () => {
  let component: TableVeterinariosComponent;
  let fixture: ComponentFixture<TableVeterinariosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TableVeterinariosComponent]
    });
    fixture = TestBed.createComponent(TableVeterinariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
