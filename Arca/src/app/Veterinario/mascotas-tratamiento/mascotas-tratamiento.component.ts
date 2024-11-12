import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Droga } from 'src/app/interfaces-springboot/Droga';
import { Mascota } from 'src/app/interfaces-springboot/Mascota';
import { Tratamiento } from 'src/app/interfaces-springboot/Tratamiento';
import { DrogaService } from 'src/app/service/droga.service';
import { MascotaService } from 'src/app/service/mascota.service';
import { TratamientoService } from 'src/app/service/tratamiento.service';
import { VeterinarioService } from 'src/app/service/veterinario.service';

@Component({
  selector: 'app-mascotas-tratamiento',
  templateUrl: './mascotas-tratamiento.component.html',
  styleUrls: ['./mascotas-tratamiento.component.css']
})
export class MascotasTratamientoComponent  implements OnInit {
 
  //Agregar una mascota a partir del form
constructor(
  public veterinarioService: VeterinarioService, 
  private drogaService: DrogaService, 
  private mascotaService: MascotaService, 
  private tratamientoService: TratamientoService,
  private route: ActivatedRoute, 
  private router: Router) {}

  sendTratamiento!: Tratamiento;

    //agregar tratamiento del form
    formTratamiento: Tratamiento = {
      id: 0,
      precio: 0,
      mascotaIdLong: 0,
      veterinarioIdLong: 0,
      fecha: '',
      drogaIdLong: 0,
    };

    mascotaNombre: string = '';
    veterinarioNombre: string = '';
    drogas: Droga[] = [];

  //Llmado al componente para el servicio
  ngOnInit(): void {
    console.log('ngOnInit de tratamiento');
    // Llamado al API
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id);
    this.mascotaService.findById(id).subscribe((mascota) => {
      this.mascotaNombre = mascota.nombre;
      //this.veterinarioNombre = localStorage.getItem('veterinarioActualNombre')
      this.formTratamiento.veterinarioIdLong = Number(localStorage.getItem('veterinarioActualId'));
      this.formTratamiento.mascotaIdLong = mascota.id;
    })
    this.veterinarioService.findById(Number(localStorage.getItem('veterinarioActualId'))).subscribe((veterinario) => {
      this.veterinarioNombre = veterinario.nombre;
    })

    this.drogaService.findAll().subscribe((drogasFetch) => {
      this.drogas = drogasFetch;
    });
  }


  historialMascota() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.router.navigate(['mascotaHistorial', id]);
  }





addTratamiento(tratamiento: Tratamiento) {
  
  this.tratamientoService.addTratamiento(tratamiento).subscribe(
    (newTratamiento) => {
      this.router.navigate(['/mascotas']); // Navigate back to the table after successful operation
    },
    (error) => {
      console.error('Error:', error);
    }
  );
}
}