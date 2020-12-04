import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreadorCursoComponent } from './creador-curso.component';

describe('CreadorCursoComponent', () => {
  let component: CreadorCursoComponent;
  let fixture: ComponentFixture<CreadorCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreadorCursoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreadorCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
