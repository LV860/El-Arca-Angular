import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  constructor(
    private http: HttpClient
  ) { }



  findUnidadesVendidasById(id: number):Observable<number> {
    return this.http.get<number>('http://localhost:8090/dashboard/uVendidasDroga/' + id)
  }

  findUnidadesDisponiblesById(id: number):Observable<number> {
    return this.http.get<number>('http://localhost:8090/dashboard/uDisponiblesDroga/' + id)
  }


}

