import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Unidad } from '../Interface/unidad';

@Injectable({
  providedIn: 'root'
})
export class UnidadService {

  constructor(private http: HttpClient) { }
  apiBaseUrl : string = 'https://hogar-presente.herokuapp.com';

  public new(id : number):Observable<any>{
    return this.http.post<any>(this.apiBaseUrl + '/api/unidades/null', id);
  }

  public updateNombre(id ,nombre:string): Observable <any>{
    return this.http.put<any>(this.apiBaseUrl + `/api/unidades/nombre/${id}`, nombre);
  }
  public updateDescripcion(id ,descripcion:string): Observable <any>{
    return this.http.put<any>(this.apiBaseUrl + `/api/unidades/descripcion/${id}`, descripcion);
  }

  public delete (id): Observable <any>{
    return this.http.delete<any>(this.apiBaseUrl+ `/api/unidades/${id}`);
  }
}
