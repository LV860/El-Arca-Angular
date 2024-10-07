import { Injectable } from '@angular/core';
import { Mascota } from '../interfaces-springboot/Mascota';
import { BehaviorSubject, Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


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
  addMascota(mascota: Mascota) {
    //mascota.id = await this.generateUniqueId();
    // En este caso la información va por el cuerpo de la petición, primero la url y luego la info que envío
    this.http.post('http://localhost:8090/mascota/add', mascota).subscribe();
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


  updateMascota(mascota: Mascota): void {
    this.http.put(`http://localhost:8090/mascota/update/${mascota.id}`, mascota)
      .subscribe({
        next: (response) => {
          console.log('Mascota actualizada con éxito:', response);
        },

        error: (error) => {
          console.error('Error al actualizar la mascota:', error);
        }
      });
  }

  /*
  updateMascota(updatedMascota: Mascota) {
    const index = this.mascotasList.findIndex(m => m.id === updatedMascota.id);
    if (index !== -1) {
      this.mascotasList[index] = updatedMascota;
      this.mascotasSubject.next(this.mascotasList);
    }
  }
*/
  private async generateUniqueId(): Promise<number> {
    const mascotasList = await this.findAll().toPromise();
    return mascotasList!.length + 1;
  }

}