import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Imagen } from '../Interface/imagen';

@Injectable({
  providedIn: 'root'
})
export class ImagenService {

  urlBase : string = 'https://hogar-presente.herokuapp.com';
  constructor(private httpClient: HttpClient) { }

  public upload(img:File, id): Observable <any>{
    const formData = new FormData();
    formData.append('multipartFile',img);
    return this.httpClient.put<any>(this.urlBase + `/api/cursos/Img/${id}`, formData);
  }
  public delete(id:number): Observable <any>{
    return this.httpClient.delete<any>(this.urlBase + `/cloudinary/delete/${id}`);
  }
}
