import { TestBed } from '@angular/core/testing';

import { UserAlumnoService } from './user-alumno.service';

describe('UserAlumnoService', () => {
  let service: UserAlumnoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserAlumnoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
