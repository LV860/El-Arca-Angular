import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tratamiento } from 'src/app/interfaces-springboot/Tratamiento';
import { User } from 'src/app/interfaces-springboot/User';
import { Veterianario } from 'src/app/interfaces-springboot/Veterinario';
import { VeterinarioService } from 'src/app/service/veterinario.service';

@Component({
  selector: 'app-inicio-veterinario',
  templateUrl: './inicio-veterinario.component.html',
  styleUrls: ['./inicio-veterinario.component.css']
})
export class InicioVeterinarioComponent {

  id!: number; // Para almacenar el ID del usuario
  cedula!: string;
  contra!: string; // Para almacenar la contraseña
  error: boolean = false; // Para mostrar mensajes de error

   //BD Lista
   veterinariosList: Veterianario[] = [];

   /*veterinarioValido: Veterianario  = {
    id: 0,
    cedula: '',
    contrasena: '',
    especialidad: '',
    estado: '',
    urlImagen: '',
    nombre: '',
    tratamientos: [] as Tratamiento[] 
  };*/

  veterinarioValido: User = {
    cedula: '',
    contrasena: ''
  };


  constructor(private router: Router, private route: ActivatedRoute, private veterinarioService: VeterinarioService) {}


  listaVeterinarios() {
    this.veterinarioService.findAll().subscribe((veterinario) => {
      this.veterinariosList = veterinario;
    })
  }

  iniciarSesion() {
    this.veterinarioService.veterinarioLogin(this.veterinarioValido).subscribe(
      (data) => {
        localStorage.setItem('token', String(data));
        this.router.navigate(['/veterinario/home']);
      }
     );
   
  }
}
