import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Curso } from '../models/curso';

@Injectable({
  providedIn: 'root'
})
export class CursoService {
  private baseEndpoint ='http://localhost:8090/api/cursos';
  private cabeceras:HttpHeaders = new HttpHeaders({'Content-Type':'application/json'});
  constructor(private http:HttpClient) { }
  public listar(): Observable<Curso[]>{
    return this.http.get<Curso[]>(this.baseEndpoint);
  }

  public ver(id: number):Observable<Curso>{

    return this.http.get<Curso>(this.baseEndpoint+'/'+id);
  }
  public crear(curso:Curso):Observable<Curso>{
    return this.http.post<Curso>(this.baseEndpoint, curso, {headers: this.cabeceras});

  }

  public editar(curso:Curso):Observable<Curso>{
    return this.http.put<Curso>(this.baseEndpoint+'/'+curso.id,curso, {headers: this.cabeceras });
  }

}
