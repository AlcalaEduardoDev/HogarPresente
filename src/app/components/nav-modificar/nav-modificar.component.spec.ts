import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavModificarComponent } from './nav-modificar.component';

describe('NavModificarComponent', () => {
  let component: NavModificarComponent;
  let fixture: ComponentFixture<NavModificarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavModificarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavModificarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
