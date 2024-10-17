import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tratamiento } from 'src/app/interfaces-springboot/Tratamiento';
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

   veterinarioValido: Veterianario  = {
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


  listaVeterinarios() {
    this.veterinarioService.findAll().subscribe((veterinario) => {
      this.veterinariosList = veterinario;
    })
  }

  iniciarSesion() {

    this.veterinarioService.findByCedula(this.cedula).subscribe((veterinario) => {
      //console.log('Veterinario obtenido:', veterinario);
      this.veterinarioValido = veterinario;
  
      // Verifica si la cedula y la contraseña son válidos después de obtener la respuesta
      if (this.veterinarioValido.cedula === this.cedula && this.veterinarioValido.contrasena === this.contra) {
        this.veterinarioService.setVeterinarioPerfil(this.veterinarioValido);
        this.router.navigate(['/perfilVeterinario', this.veterinarioValido.cedula]); // Redirigir a la página del veterinario si las credenciales son correctas
      } else {
        this.error = true; // Muestra el mensaje de error si las credenciales son incorrectas
        console.log('Veterinario no existe', veterinario);
      }
    }, (error) => {
      console.error('Error al buscar veterinario:', error);
      this.error = true; // Muestra un mensaje de error si la búsqueda falla
    });
  }

  
  


}
