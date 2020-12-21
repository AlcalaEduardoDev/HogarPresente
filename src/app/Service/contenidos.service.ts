import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NuevoContenido } from '../models/nuevo-contenido';

@Injectable({
  providedIn: 'root'
})
export class ContenidosService {

  apiBaseUrl : string = 'https://hogar-presente.herokuapp.com';

  constructor(private httpClient: HttpClient) { }
  public findAll():Observable<any>{
    return this.httpClient.get(this.apiBaseUrl+'/api/contenidos');
  }
  public findOne(id): Observable<any>{
    return this.httpClient.get(this.apiBaseUrl + `/api/contenidos/${id}`);
  }
  public nuevo(id,nombre:string): Observable<any>  {
    return this.httpClient.post<any>(this.apiBaseUrl+`/api/contenidos/${id}`,nombre);
  }
  public delete(id): Observable<any> {
    return this.httpClient.delete<any>(this.apiBaseUrl + `/api/contenidos/${id}`);
  }
  public updateNombre(id, nombre: string):Observable<any>{
    return this.httpClient.put<any>(this.apiBaseUrl + `/api/contenidos/nombre/${id}`,nombre);
  }
  public updateDocumento(id, url: string):Observable<any>{
    return this.httpClient.put<any>(this.apiBaseUrl + `/api/contenidos/documento/${id}`,url);
  }

}
