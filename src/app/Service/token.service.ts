import { Injectable } from '@angular/core';

const TOKEN_KEY = 'AuthToken';
const EMAIL_KEY = 'AuthEmail';
const AUTHORITIES_KEY = 'AuthAuthorities';
const NOMBRE_KEY = 'AuthNombre';
const APELLIDO_KEY = 'AuthApellido';
const FOTO_KEY = 'AuthFoto';
const ESTUDIO_KEY = 'AuthEstudio';
const EDAD_KEY ='AuthEdad';


@Injectable({
  providedIn: 'root'
})
export class TokenService {

  roles :Array<string> =[];

  constructor() { }

  public setToken(token:string):void{
    window.sessionStorage.removeItem(TOKEN_KEY);
    window.sessionStorage.setItem(TOKEN_KEY,token);
  }
  public getToken():string{
    return sessionStorage.getItem(TOKEN_KEY);
  }
  public setEmail(email:string):void{
    window.sessionStorage.removeItem(EMAIL_KEY);
    window.sessionStorage.setItem(EMAIL_KEY,email);
  }
  public getEmail():string{
    return sessionStorage.getItem(EMAIL_KEY);
  }
  public setAuthorities(authorities:string[]):void{
    window.sessionStorage.removeItem(AUTHORITIES_KEY);
    window.sessionStorage.setItem(AUTHORITIES_KEY,JSON.stringify(authorities));
  }
  public getAuthorities():string[]{
    this.roles =[];
    if(sessionStorage.getItem(AUTHORITIES_KEY)){
      JSON.parse(sessionStorage.getItem(AUTHORITIES_KEY)).forEach(authority =>{
        this.roles.push(authority.authority);
      })
    }
    return this.roles;
  }
  public setNombre(nombre:string):void{
    window.sessionStorage.removeItem(NOMBRE_KEY);
    window.sessionStorage.setItem(NOMBRE_KEY,nombre);
  }
  public getNombre():string{
    return sessionStorage.getItem(NOMBRE_KEY);
  }
  public setApellido(apellido:string):void{
    window.sessionStorage.removeItem(APELLIDO_KEY);
    window.sessionStorage.setItem(APELLIDO_KEY,apellido);
  }
  public getApellido():string{
    return sessionStorage.getItem(APELLIDO_KEY);
  }

  public setFoto(foto:string):void{
    window.sessionStorage.removeItem(FOTO_KEY);
    window.sessionStorage.setItem(FOTO_KEY,foto);
  }
  public getFoto():string{
    return sessionStorage.getItem(FOTO_KEY);
  }

  public setEstudio(estudio:string):void{
    window.sessionStorage.removeItem(ESTUDIO_KEY);
    window.sessionStorage.setItem(ESTUDIO_KEY,estudio);
  }
  public getEstudio():string{
    return sessionStorage.getItem(ESTUDIO_KEY);
  }

  public setEdad(edad:string):void{
    window.sessionStorage.removeItem(EDAD_KEY);
    window.sessionStorage.setItem(EDAD_KEY,edad);
  }
  public getEdad():string{
    return sessionStorage.getItem(EDAD_KEY);
  }

  public logout():void {
    window.sessionStorage.clear();
  }
}
