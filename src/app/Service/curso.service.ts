import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { NuevoCurso } from '../models/nuevo-curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {

  apiBaseUrl : string = 'https://hogar-presente.herokuapp.com';
  constructor(private httpClient: HttpClient) { }
  public findAll():Observable<any>{
    return this.httpClient.get(this.apiBaseUrl+'/api/cursos');
  }

  public findOne(id): Observable<any>{
    return this.httpClient.get(this.apiBaseUrl + `/api/cursos/${id}`);
  }
  public nuevo(nuevoCurso:NuevoCurso): Observable<any>  {
    return this.httpClient.post<any>(this.apiBaseUrl+'/api/cursos',nuevoCurso);
  }
}
