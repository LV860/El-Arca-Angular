import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TratamientosTableComponent } from './tratamientos-table.component';

describe('TratamientosTableComponent', () => {
  let component: TratamientosTableComponent;
  let fixture: ComponentFixture<TratamientosTableComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TratamientosTableComponent]
    });
    fixture = TestBed.createComponent(TratamientosTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
