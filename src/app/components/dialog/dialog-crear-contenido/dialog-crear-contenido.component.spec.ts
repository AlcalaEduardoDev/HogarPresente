import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogCrearContenidoComponent } from './dialog-crear-contenido.component';

describe('DialogCrearContenidoComponent', () => {
  let component: DialogCrearContenidoComponent;
  let fixture: ComponentFixture<DialogCrearContenidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogCrearContenidoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogCrearContenidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
