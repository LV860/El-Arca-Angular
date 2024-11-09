import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tratamiento } from 'src/app/interfaces-springboot/Tratamiento';
import { Veterianario } from 'src/app/interfaces-springboot/Veterinario';
import { VeterinarioService } from 'src/app/service/veterinario.service';

@Component({
  selector: 'app-edit-veterinarios',
  templateUrl: './edit-veterinarios.component.html',
  styleUrls: ['./edit-veterinarios.component.css']
})
export class EditVeterinariosComponent {

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


  constructor(private router: Router, private route: ActivatedRoute, private veterinarioService: VeterinarioService) {}

  ngOnInit(): void {
    console.log('ngOnInit de detail');
    // Llamado al API
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.veterinarioService.findById(id).subscribe((veterinario) => {

      this.veterinario = veterinario;
      
    })
    
  }

    /*
    guardarCambios(cliente: Cliente) {
      this.clienteService.updateCliente(cliente);
      console.log( "Nombre: " +cliente.nombre);
      this.router.navigate(['clientes']);
    }
*/
    guardarCambios(veterinario: Veterianario) {

      this.veterinarioService.updateVeterinario(veterinario).subscribe(
        (newVeterinario) => {
          this.router.navigate(['/veterinariosAdmin']); // Navigate back to the table after successful operation
        }
      );
      
    }

}
