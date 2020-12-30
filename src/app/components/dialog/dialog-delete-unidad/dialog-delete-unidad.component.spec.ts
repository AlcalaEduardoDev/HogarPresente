import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogDeleteUnidadComponent } from './dialog-delete-unidad.component';

describe('DialogDeleteUnidadComponent', () => {
  let component: DialogDeleteUnidadComponent;
  let fixture: ComponentFixture<DialogDeleteUnidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogDeleteUnidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogDeleteUnidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
