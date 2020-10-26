import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListaCursosService {

  apiBaseUrl : string = 'https://e6b4b286-1a3f-4b6d-8663-7a6cb9f3fa22.mock.pstmn.io';
  constructor(private http: HttpClient) { }
  public findAll():Observable<any>{
    return this.http.get(this.apiBaseUrl + '/lista-cursos');
  }
}
