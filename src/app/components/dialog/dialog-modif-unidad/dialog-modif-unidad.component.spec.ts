import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogModifUnidadComponent } from './dialog-modif-unidad.component';

describe('DialogModifUnidadComponent', () => {
  let component: DialogModifUnidadComponent;
  let fixture: ComponentFixture<DialogModifUnidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogModifUnidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogModifUnidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
