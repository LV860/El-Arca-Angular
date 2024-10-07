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
  contra!: string; // Para almacenar la contraseña
  error: boolean = false; // Para mostrar mensajes de error

   //BD Lista
   veterinariosList: Veterianario[] = [];

   veterinarioValido: Veterianario  = {
    id: 0,
    cedula: '',
    contrasena: '',
    especialidad: '',
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

    /*
    this.listaVeterinarios();

    // Verificar si el ID y la contraseña son válidos
    const veterinarioValido = this.veterinariosList.find(veterinario => 
      veterinario.id === this.id && veterinario.contrasena === this.contra // Asegúrate de que la propiedad de contraseña sea correcta
    );

    */
    this.veterinarioService.findById(this.id).subscribe((veterinario) => {
      this.veterinarioValido = veterinario;
  
      // Verifica si el ID y la contraseña son válidos después de obtener la respuesta
      if (this.veterinarioValido.id === this.id && this.veterinarioValido.contrasena === this.contra) {
        this.veterinarioService.setVeterinarioPerfil(this.veterinarioValido);
        this.router.navigate(['/perfilVeterinario']); // Redirigir a la página del veterinario si las credenciales son correctas
      } else {
        this.error = true; // Muestra el mensaje de error si las credenciales son incorrectas
      }
    }, (error) => {
      console.error('Error al buscar veterinario:', error);
      this.error = true; // Muestra un mensaje de error si la búsqueda falla
    });
  }

  
  


}
