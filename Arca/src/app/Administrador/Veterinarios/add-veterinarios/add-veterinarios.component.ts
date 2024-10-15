import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Tratamiento } from 'src/app/interfaces-springboot/Tratamiento';
import { Veterianario } from 'src/app/interfaces-springboot/Veterinario';
import { VeterinarioService } from 'src/app/service/veterinario.service';

@Component({
  selector: 'app-add-veterinarios',
  templateUrl: './add-veterinarios.component.html',
  styleUrls: ['./add-veterinarios.component.css']
})
export class AddVeterinariosComponent {

  veterinario: Veterianario = {
    id: 0,
    cedula: '',
    contrasena: '',
    especialidad: '',
    estado: '',
    urlImagen: '',
    nombre: '',
    tratamientos: [] as Tratamiento[]   
  };


  constructor(private veterinarioService: VeterinarioService, private router: Router) {}

  addVeterinario(veterinario: Veterianario) {
    this.veterinarioService.addVeterinario(veterinario).subscribe(
      (newCliente) => {
        this.router.navigate(['/veterinariosAdmin']); // Navigate back to the table after successful operation
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

}
