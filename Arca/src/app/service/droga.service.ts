import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Droga } from '../interfaces-springboot/Droga';

@Injectable({
  providedIn: 'root'
})
export class DrogaService {

  constructor(
    private http: HttpClient
  ) { }

  findAll(){
    return this.http.get<Droga[]>('http://localhost:8090/droga/all');
  }





}
