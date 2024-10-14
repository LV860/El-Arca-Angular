import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Administrador } from 'src/app/interfaces-springboot/Administrador';
import { AdministradorService } from 'src/app/service/administrador.service';

@Component({
  selector: 'app-inicio-admi',
  templateUrl: './inicio-admi.component.html',
  styleUrls: ['./inicio-admi.component.css']
})
export class InicioAdmiComponent {


  usuario!: string; // Para almacenar el ID del usuario
  contra!: string; // Para almacenar la contraseña
  error: boolean = false; // Para mostrar mensajes de error

   //BD Lista
   adminList: Administrador[] = [];

   adminValido: Administrador  = {
    id: 0,
    usuario: '',
    contrasena: '',
    
  };


  constructor(private router: Router, private route: ActivatedRoute, private administradorService: AdministradorService) {}


  listaAdministradores() {
    this.administradorService.findAll().subscribe((admin) => {
      this.adminList = admin;
    })
  }

  iniciarSesion() {

    this.administradorService.findByUsuario(this.usuario).subscribe((admin) => {

      console.log( "BD admin: " +admin);
      this.adminValido = admin;

      console.log( "adminValido usuario: " +this.adminValido.usuario);
      console.log( "adminValido contra: " +this.adminValido.contrasena);
      
      console.log( "Usuario inicio: " +this.usuario);
      console.log( "Contra inicio: " +this.contra);
  
      // Verifica si el ID y la contraseña son válidos después de obtener la respuesta
      if (this.adminValido.usuario === this.usuario && this.adminValido.contrasena === this.contra) {
        console.log( "Se valido el admin: " +this.adminValido.id);
        this.administradorService.setAdministradorPerfil(this.adminValido);
        console.log( "Se valido el admin: " +this.adminValido.id);
        
        this.router.navigate(['/perfilAdmin', this.adminValido.id]); // Redirigir a la página del veterinario si las credenciales son correctas
      } else {
        this.error = true; // Muestra el mensaje de error si las credenciales son incorrectas
      }
    }, (error) => {
      console.error('Error al buscar veterinario:', error);
      this.error = true; // Muestra un mensaje de error si la búsqueda falla
    });
  }


}
