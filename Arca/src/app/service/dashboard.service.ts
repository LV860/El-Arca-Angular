import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tratamiento } from '../interfaces-springboot/Tratamiento';

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

  //KPIs 1
  findTotalTratamientosUltimoMes():Observable<number>{
    return this.http.get<number>('http://localhost:8090/dashboard/total/tratamientosUltimoMes');
  }

  //KPIs 2
  findTotalTratamientosUltimoMesPorDroga(): Observable<{ [key: string]: number }> {
    return this.http.get<{ [key: string]: number }>('http://localhost:8090/dashboard/total/tratamientosUltimoMes/porDroga');
  }

  //KPIs 3
  findCantidadVeterinariosActivos():Observable<number>{
    return this.http.get<number>('http://localhost:8090/dashboard/veterinariosActivos/cantidad');
  }

  //KPIs 4
  findCantidadVeterinariosInactivos():Observable<number>{
    return this.http.get<number>('http://localhost:8090/dashboard/veterinariosInactivos/cantidad');
  }

  //KPIs 5
  findTotalMascotas():Observable<number>{
    return this.http.get<number>('http://localhost:8090/dashboard/mascotas/total');
  }

  //KPIs 6
  findTotalMascotasActivas():Observable<number>{
    return this.http.get<number>('http://localhost:8090/dashboard/mascotas/activas');
  }

  //KPIs 7
  findTotalVentas():Observable<number>{
    return this.http.get<number>('http://localhost:8090/dashboard/ventas/totales');
  }

  //KPIs 8
  findTotalGanancias():Observable<number>{
    return this.http.get<number>('http://localhost:8090/dashboard/ganancias/totales');
  }

  //KPIs 9
  findTop3TratamientosMasCaros(): Observable<Tratamiento[]> {
    return this.http.get<Tratamiento[]>('http://localhost:8090/dashboard/top3/tratamientosMasCaros');
  }


}

