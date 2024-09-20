import { Injectable } from '@angular/core';
import { Mascota } from '../interfaces-springboot/Mascota';
import { BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class MascotaService {
  private mascotasList: Mascota[] = [
    {
      id: 1,
      nombre: 'Luna',
      raza: 'Golden Retriever',
      edad: 5,
      peso: 30,
      enfermedad: 'displasia de cadera',
      urlImagen: 'https://example.com/luna.jpg',
      cedulaDuenho: 1010101010,
      estado: 'Inactiva',
    },
    {
      id: 2,
      nombre: 'Max',
      raza: 'Poodle',
      edad: 3,
      peso: 8,
      urlImagen: 'https://example.com/max.jpg',
      cedulaDuenho: 2020202020,
      estado: 'En tratamiento',
      enfermedad: 'alergias',
    },
    {
      id: 3,
      nombre: 'Bella',
      raza: 'Chihuahua',
      edad: 2,
      peso: 2.5,
      enfermedad: 'asma',
      urlImagen: 'https://example.com/bella.jpg',
      cedulaDuenho: 3030303030,
      estado: 'En tratamiento',
    },
    {
      id: 4,
      nombre: 'Rocky',
      raza: 'Bulldog',
      edad: 4,
      peso: 25,
      urlImagen: 'https://example.com/rocky.jpg',
      cedulaDuenho: 4040404040,
      estado: 'Inactiva',
      enfermedad: 'muerte',
    },
    {
      id: 5,
      nombre: 'Nala',
      raza: 'Persa',
      edad: 3,
      peso: 4,
      urlImagen: 'https://example.com/nala.jpg',
      cedulaDuenho: 5050505050,
      estado: 'Inactiva',
      enfermedad: 'paralisis',
    },
    {
      id: 6,
      nombre: 'Toby',
      raza: 'Beagle',
      edad: 7,
      peso: 18,
      urlImagen: 'https://example.com/toby.jpg',
      cedulaDuenho: 6060606060,
      estado: 'En tratamiento',
      enfermedad: 'artritis',
    },
    {
      id: 7,
      nombre: 'Simba',
      raza: 'Bengal',
      edad: 5,
      peso: 6,
      urlImagen: 'https://example.com/simba.jpg',
      cedulaDuenho: 7070707070,
      estado: 'Inactiva',
      enfermedad: 'eplipsia',
    },
    {
      id: 8,
      nombre: 'Coco',
      raza: 'Shih Tzu',
      edad: 1,
      peso: 5,
      urlImagen: 'https://example.com/coco.jpg',
      cedulaDuenho: 8080808080,
      estado: 'Inactiva',
      enfermedad: 'alergias',
    },
    {
      id: 9,
      nombre: 'Molly',
      raza: 'Dachshund',
      edad: 6,
      peso: 7,
      enfermedad: 'diabetes',
      urlImagen: 'https://example.com/molly.jpg',
      cedulaDuenho: 9090909090,
      estado: 'En tratamiento',
    },
    {
      id: 10,
      nombre: 'Oliver',
      raza: 'Siamese',
      edad: 4,
      peso: 4.5,
      urlImagen: 'https://example.com/oliver.jpg',
      cedulaDuenho: 1011121314,
      estado: 'Inactiva',
      enfermedad: 'pulmonitis',
    },
  ];
  private mascotasSubject = new BehaviorSubject<Mascota[]>(this.mascotasList);

  getMascotas() {
    return this.mascotasSubject.asObservable();
  }

  addMascota(mascota: Mascota) {
    mascota.id = this.generateUniqueId();
    this.mascotasList.push(mascota);
    this.mascotasSubject.next(this.mascotasList);
  }


  findAll(){
    return this.mascotasList;
  }

  findById(id: number):Mascota {
    const mascota:Mascota=this.mascotasList.find(o => o.id === id)!;
    return mascota;
  }

  updateMascota(updatedMascota: Mascota) {
    const index = this.mascotasList.findIndex(m => m.id === updatedMascota.id);
    if (index !== -1) {
      this.mascotasList[index] = updatedMascota;
      this.mascotasSubject.next(this.mascotasList);
    }
  }

  private generateUniqueId(): number {
    return this.mascotasList.length > 0
      ? Math.max(...this.mascotasList.map(m => m.id)) + 1
      : 1;
  }

}