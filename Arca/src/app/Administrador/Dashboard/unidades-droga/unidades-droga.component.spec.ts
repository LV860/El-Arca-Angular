import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnidadesDrogaComponent } from './unidades-droga.component';

describe('UnidadesDrogaComponent', () => {
  let component: UnidadesDrogaComponent;
  let fixture: ComponentFixture<UnidadesDrogaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [UnidadesDrogaComponent]
    });
    fixture = TestBed.createComponent(UnidadesDrogaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
