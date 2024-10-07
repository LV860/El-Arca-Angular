import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilVeterinarioComponent } from './perfil-veterinario.component';

describe('PerfilVeterinarioComponent', () => {
  let component: PerfilVeterinarioComponent;
  let fixture: ComponentFixture<PerfilVeterinarioComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PerfilVeterinarioComponent]
    });
    fixture = TestBed.createComponent(PerfilVeterinarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
