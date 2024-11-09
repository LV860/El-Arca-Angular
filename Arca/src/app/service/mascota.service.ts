import { Injectable } from '@angular/core';
import { Mascota } from '../interfaces-springboot/Mascota';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  private mascotasList: Mascota[] = [];
  
  constructor(
    private http: HttpClient
  ) { }

  /*
  getMascotas() {
    return this.mascotasSubject.asObservable();
  }
    */

  /*
  addMascota(mascota: Mascota) {
    mascota.id = this.generateUniqueId();
    //En este caso la información va por el cuerpo de la petición, primero la url y luego la info que envío
    this.http.post('http://localhost:8090/mascota/add', mascota).subscribe();
  }
*/
//async addMascota(mascota: Mascota) {

// Método para obtener las mascotas por ID de cliente
getMascotasByClienteId(clienteId: number): Observable<Mascota[]> {
  return this.http.get<Mascota[]>(`http://localhost:8090/mascota/find?id=`).pipe(
    catchError((error: HttpErrorResponse) => {
      console.error('Error al obtener las mascotas:', error);
      return throwError(error);
    })
  );
}

  addMascota(mascota: Mascota): Observable<Mascota> {
    return this.http.post<Mascota>('http://localhost:8090/mascota/add', mascota).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error:', error);
        return throwError(error);
      })
    );
  }

  findAll(){
    return this.http.get<Mascota[]>('http://localhost:8090/mascota/all');
  }

  findById(id: number):Observable<Mascota> {
    return this.http.get<Mascota>('http://localhost:8090/mascota/find?id=' + id)
  }

  deleteById(id: number) {
    console.log(id);
    this.http.delete('http://localhost:8090/mascota/delete/' + id).subscribe();
  }


  

  updateMascota(mascota: Mascota): Observable<any> {
    return this.http.put(`http://localhost:8090/mascota/update/${mascota.id}`, mascota).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error al actualizar mascota:', error);
        return throwError(() => new Error(error.message));
      })
    );
  }
  private async generateUniqueId(): Promise<number> {
    const mascotasList = await this.findAll().toPromise();
    return mascotasList!.length + 1;
  }

}