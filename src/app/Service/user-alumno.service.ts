import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alumno } from '../Interface/alumno';


@Injectable({
  providedIn: 'root'
})
export class UserAlumnoService {

  apiBaseUrl : string = 'https://ba072e38-a035-4e4f-af9e-281642d5d4ca.mock.pstmn.io';

  constructor(private http: HttpClient) { }

  public findAll():Observable<any>{
    return this.http.get(this.apiBaseUrl + '/alumnos');
  }

  public addAlumno(alumno:Alumno) : Observable<any>{
    return this.http.post<any>(this.apiBaseUrl + '/alumnos', alumno );
  }
}
