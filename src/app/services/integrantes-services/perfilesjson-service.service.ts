import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Integrante } from '../../models/Integrantes';

@Injectable({
  providedIn: 'root'
})
export class PerfilesjsonServiceService {
  private jsonURL = "/public/json/integrantes.json";
  constructor(private http:HttpClient) { }
  getPerfiles(): Observable<Integrante[]> {
    return this.http.get<Integrante[]>(this.jsonURL);
  }
}
