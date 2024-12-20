import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tratamiento } from 'src/app/interfaces-springboot/Tratamiento';
import { MascotaService } from 'src/app/service/mascota.service';
import { TratamientoService } from 'src/app/service/tratamiento.service';
import { VeterinarioService } from 'src/app/service/veterinario.service';

@Component({
  selector: 'app-tratamiento-mascota',
  templateUrl: './tratamiento-mascota.component.html',
  styleUrls: ['./tratamiento-mascota.component.css']
})
export class TratamientoMascotaComponent {
  //Agregar una mascota a partir del form
  constructor(public veterinarioService: VeterinarioService, private mascotaService: MascotaService, private tratamientoService: TratamientoService,private route: ActivatedRoute, private router: Router) {}

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

  //Llmado al componente para el servicio
  ngOnInit(): void {
    console.log('ngOnInit de tratamiento');
    // Llamado al API
    const id = Number(this.route.snapshot.paramMap.get('id'));
    console.log(id);
    this.mascotaService.findById(id).subscribe((mascota) => {
      //this.formTratamiento.veterinarioIdLong = Number(localStorage.getItem('veterinarioActualId'));
      this.formTratamiento.mascotaIdLong = mascota.id;
    })
  }


  historialMascota() {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.router.navigate(['mascotaHistorialAdmin', id]);
  }





  addTratamiento(tratamiento: Tratamiento) {

  this.tratamientoService.addTratamiento(tratamiento).subscribe(
    (newTratamiento) => {
      this.router.navigate(['/mascotasAdmin']); // Navigate back to the table after successful operation
    },
    (error) => {
      console.error('Error:', error);
    }
  );
  }
}
