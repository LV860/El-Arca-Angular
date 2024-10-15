import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mascota } from 'src/app/interfaces-springboot/Mascota';
import { MascotaService } from 'src/app/service/mascota.service';

@Component({
  selector: 'app-add-mascotas',
  templateUrl: './add-mascotas.component.html',
  styleUrls: ['./add-mascotas.component.css']
})
export class AddMascotasComponent {
  sendMascota!: Mascota;

  //agregar mascota del form
  formMascota: Mascota = {
    id: 0,
    nombre: '',
    raza: '',
    edad: 0,
    peso: 0,
    enfermedad: '',
    urlImagen: '',
    cedulaDuenho: 0,
    estado: '',
  };


//Agregar una mascota a partir del form
constructor(private mascotaService: MascotaService, private router: Router) {}

/*
addMascota( mascota: Mascota) {
  //console.log(mascota);
  this.mascotaService.addMascota(mascota);
  this.router.navigate(['/mascotas']); // Navigate back to the table
}
*/
addMascota(mascota: Mascota) {
  this.mascotaService.addMascota(mascota).subscribe(
    (newMascota) => {
      this.router.navigate(['/mascotasAdmin']); // Navigate back to the table after successful operation
    },
    (error) => {
      console.error('Error:', error);
    }
  );
}



}
