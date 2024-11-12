import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Administrador } from 'src/app/interfaces-springboot/Administrador';
import { User } from 'src/app/interfaces-springboot/User';
import { UserAdmin } from 'src/app/interfaces-springboot/UserAdmin';
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

   adminValido: UserAdmin  = {
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

    this.administradorService.adminLogin(this.adminValido).subscribe(
      (data) => {
        localStorage.setItem('token', String(data));
        this.router.navigate(['/admin/home']);
      }, error => {
        this.error = true;
      }
    );

  }

}
