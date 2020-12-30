import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DialogVerifCorreoComponent } from './dialog-verif-correo.component';

describe('DialogVerifCorreoComponent', () => {
  let component: DialogVerifCorreoComponent;
  let fixture: ComponentFixture<DialogVerifCorreoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DialogVerifCorreoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DialogVerifCorreoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
