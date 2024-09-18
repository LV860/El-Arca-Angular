import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioVeterinarioComponent } from './inicio-veterinario.component';

describe('InicioVeterinarioComponent', () => {
  let component: InicioVeterinarioComponent;
  let fixture: ComponentFixture<InicioVeterinarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [InicioVeterinarioComponent]
    });
    fixture = TestBed.createComponent(InicioVeterinarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
