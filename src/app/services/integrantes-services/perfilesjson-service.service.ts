import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
export interface Integrante {
  id?:number;
    nombre: string;
    apellido:string;
    foto:string;
    link:string;
    numero: string;
}
@Injectable({
  providedIn: 'root',
})


export class PerfilesjsonService {
  //private jsonURL = "/public/json/integrantes.json";
  private jsonURL = "http://localhost:3000/integrantes";
  
  constructor(private http:HttpClient) { }
  // getPerfiles():Observable<Integrante[]> {
  //   return this.http.get<Integrante[]>(this.jsonURL);
  // }
  getMovies():Observable<Integrante[]>{
    return this.http.get<Integrante[]>(this.jsonURL);
  }
}
