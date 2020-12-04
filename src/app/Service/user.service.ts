import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler, HttpHeaders} from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { Alumno } from '../interface/alumno';
import { TokenDto } from '../models/token-dto';
import { catchError, map } from 'rxjs/operators';
import {JwtHelperService} from '@auth0/angular-jwt'; 
const cabecera = {headers: new HttpHeaders({'content-type':'application-json'})};
const helper = new JwtHelperService(); 


@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  oauthURL = 'http://localhost:8080/oauth/';
  apiBaseUrl : string = 'https://ba072e38-a035-4e4f-af9e-281642d5d4ca.mock.pstmn.io';
  isAdmin : boolean;


  constructor(private http: HttpClient) { 
    
   }
   
  public update(alumno:Alumno): Observable<any>{
    return this.http.put<any>(this.apiBaseUrl + '/api/alumnos', alumno);
  }
  public google (tokenDto:TokenDto): Observable<TokenDto>{
    return this.http.post<TokenDto>(this.oauthURL + 'google', tokenDto, cabecera);
  }
  public facebook (tokenDto:TokenDto): Observable<TokenDto>{
    return this.http.post<TokenDto>(this.oauthURL + 'facebook', tokenDto, cabecera);
  }

}
