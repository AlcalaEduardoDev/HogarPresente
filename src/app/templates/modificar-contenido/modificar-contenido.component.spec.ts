import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarContenidoComponent } from './modificar-contenido.component';

describe('ModificarContenidoComponent', () => {
  let component: ModificarContenidoComponent;
  let fixture: ComponentFixture<ModificarContenidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarContenidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarContenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
