import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Mascota } from 'src/app/interfaces-springboot/Mascota';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {
  private mascotasList: Mascota[] = [];
  private mascotasSubject = new BehaviorSubject<Mascota[]>(this.mascotasList);

  getMascotas() {
    return this.mascotasSubject.asObservable();
  }

  addMascota(mascota: Mascota) {
    this.mascotasList.push(mascota);
    this.mascotasSubject.next(this.mascotasList);
  }
}