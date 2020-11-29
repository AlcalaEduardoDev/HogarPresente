import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Curso } from '../Interface/curso';

@Injectable({
  providedIn: 'root'
})
export class ListaCursosService {

  cursoActivo : Curso;
  apiBaseUrl : string = 'https://hogar-presente.herokuapp.com';
  constructor(private http: HttpClient) { }
  public findAll():Observable<any>{
    return this.http.get(this.apiBaseUrl + '/api/cursos');
  }

  public findOne(id): Observable<any>{
    //const url = this.apiBaseUrl + "/api/cursos/" + id;
    return this.http.get(this.apiBaseUrl + `/api/cursos/${id}`);
  }
}
