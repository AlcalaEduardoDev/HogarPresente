import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModificarTallerComponent } from './modificar-taller.component';

describe('ModificarTallerComponent', () => {
  let component: ModificarTallerComponent;
  let fixture: ComponentFixture<ModificarTallerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ModificarTallerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ModificarTallerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
