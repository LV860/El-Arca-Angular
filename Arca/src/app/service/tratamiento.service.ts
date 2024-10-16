import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tratamiento } from '../interfaces-springboot/Tratamiento';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TratamientoService {

  constructor(
    private http: HttpClient
  ) { }



  addTratamiento(tratamiento: Tratamiento): Observable<Tratamiento> {
    return this.http.post<Tratamiento>('http://localhost:8090/tratamiento/add', tratamiento).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error:', error);
        return throwError(error);
      })
    );
  }

  getTratamientosByMascotaId(mascotaId: number): Observable<Tratamiento[]> {
    return this.http.get<Tratamiento[]>(`http://localhost:8090/tratamiento/findByMascotaId/${mascotaId}`).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error al obtener las mascotas:', error);
        return throwError(error);
      })
    );
  }
  
}
