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
export class UserAlumnoService {
  loggeado : boolean = false;
  oauthURL = 'http://localhost:8080/oauth/';
  apiBaseUrl : string = 'https://ba072e38-a035-4e4f-af9e-281642d5d4ca.mock.pstmn.io';
  private isLoggedIn = new BehaviorSubject<boolean>(false);



  constructor(private http: HttpClient) { 
    this.checkToken();
   }
   get isLogged(): Observable<boolean>{
     return this.isLoggedIn.asObservable();
   }
  public findAll():Observable<any>{
    return this.http.get(this.apiBaseUrl + '/alumnos');
  }
  public create(alumno:Alumno) : Observable<any>{
    return this.http.post<any>(this.apiBaseUrl + '/alumnos', alumno );
  }
  login (authData:Alumno): Observable<Alumno | void>{
    return this.http.post<Alumno>(this.apiBaseUrl+'/login', authData)
    .pipe (
      map (
        (res:Alumno)=>{
          console.log('RES->', res)
          this.saveToken(res.token);
          this.isLoggedIn.next(true);
          return res;
        }),
        catchError((err)=>this.handlerError(err) )
    )
    ;
  }
  logout ():void{
    localStorage.removeItem('token');
    this.isLoggedIn.next(false);
  }
  get(id : number): Observable<Alumno>{
    return this.http.get<Alumno>(this.apiBaseUrl + '/api/alumnos'+'/'+id);
  }
  private saveToken(token: string): void{
    localStorage.setItem('token',token);
  }
  private checkToken():void{
    const userToken = localStorage.getItem('token');
    const isExpired = helper.isTokenExpired(userToken);
    console.log('isExpired:' ,isExpired);

    if(isExpired){
      this.logout();
    }else{
      this.isLoggedIn.next(true);
    }
  }
  private handlerError(err):Observable<never>{
   let errorMessage = 'Ocurrio un error';
   if (err){
     errorMessage = 'Error: code ${err.message}';
   }
   window.alert(errorMessage);
   return throwError(errorMessage);
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
