import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Tutorial } from '../models/tutorial.model';

const baseUrl = 'http://localhost:8080/api/tutorials';

@Injectable({
  providedIn: 'root'
})
export class TutorialService {

  constructor(private http: HttpClient) { }

  getAll(): Observable<Tutorial[]> {//devuelvo array y obtiene array en la peticion
    return this.http.get<Tutorial[]>(baseUrl);
  }

  get(id: any): Observable<Tutorial> {//me llega id y devuelvo array
    return this.http.get<Tutorial>(`${baseUrl}/${id}`);
  }

  create(data: any): Observable<any> {
    return this.http.post(baseUrl, data);// me lelgan los datos y devuelvo texto
  }

  update(id: any, data: any): Observable<any> {//me llega id y los datos y devuelvo texto
    return this.http.put(`${baseUrl}/${id}`, data);
  }

  delete(id: any): Observable<any> {//me llega id y devuelvo texto
    return this.http.delete(`${baseUrl}/${id}`);
  }

  deleteAll(): Observable<any> {//devuelvo texto
    return this.http.delete(baseUrl);
  }

  findByTitle(title: any): Observable<Tutorial[]> {//devuelvo array y me llega titulo
    return this.http.get<Tutorial[]>(`${baseUrl}?title=${title}`);
  }
}