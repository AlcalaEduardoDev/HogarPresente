import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alumno } from '../interface/alumno';
import { TokenDto } from '../models/token-dto';

const cabecera = {headers: new HttpHeaders({'content-type':'application-json'})};

@Injectable({
  providedIn: 'root'
})
export class UserAlumnoService {
  oauthURL = 'http://localhost:8080/oauth/';
  apiBaseUrl : string = 'https://ba072e38-a035-4e4f-af9e-281642d5d4ca.mock.pstmn.io';

  constructor(private http: HttpClient) { }

  public findAll():Observable<any>{
    return this.http.get(this.apiBaseUrl + '/alumnos');
  }

  public addAlumno(alumno:Alumno) : Observable<any>{
    return this.http.post<any>(this.apiBaseUrl + '/alumnos', alumno );
  }

  public google (tokenDto:TokenDto): Observable<TokenDto>{
    return this.http.post<TokenDto>(this.oauthURL + 'google', tokenDto, cabecera);
  }
  public facebook (tokenDto:TokenDto): Observable<TokenDto>{
    return this.http.post<TokenDto>(this.oauthURL + 'facebook', tokenDto, cabecera);
  }

}
