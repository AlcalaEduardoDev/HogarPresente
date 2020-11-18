import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { JwtDto } from '../models/jwt-dto';
import { LoginUsuario } from '../models/login-usuario';
import { NuevoUsuario } from '../models/nuevo-usuario';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUrl = 'https://hogar-presente.herokuapp.com/';


  constructor(private httpClient:HttpClient ) { }

  public nuevo(nuevoUser:NuevoUsuario): Observable<any>{
    return this.httpClient.post<any>(this.authUrl+'auth/nuevo',nuevoUser);
  }
  public login(loginUser:LoginUsuario): Observable<JwtDto>{
    return this.httpClient.post<JwtDto>(this.authUrl+'auth/login',loginUser);
  }

}
