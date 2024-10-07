import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClientesAddComponent } from './clientes-add.component';

describe('ClientesAddComponent', () => {
  let component: ClientesAddComponent;
  let fixture: ComponentFixture<ClientesAddComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ClientesAddComponent]
    });
    fixture = TestBed.createComponent(ClientesAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
