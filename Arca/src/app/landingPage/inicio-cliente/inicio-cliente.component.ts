import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/interfaces-springboot/Cliente';
import { Mascota } from 'src/app/interfaces-springboot/Mascota';
import { User } from 'src/app/interfaces-springboot/User';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-inicio-cliente',
  templateUrl: './inicio-cliente.component.html',
  styleUrls: ['./inicio-cliente.component.css']
})
export class InicioClienteComponent {

  cedula!: string;  
  error: boolean = false;
  clienteList: Cliente [] = [];

  clienteValido: User = {
    cedula: '',
    contrasena: ''
  };
  
  constructor(private router: Router, private route: ActivatedRoute,private clienteService: ClienteService) {}

  listaClientes(){
    this.clienteService.findAll().subscribe((cliente)=>{
      this.clienteList = cliente;
    })
  }



  iniciarSesion() {

    //this.clienteService.setClienteEdit(this.clienteValido);
    this.clienteService.clienteLogin(this.clienteValido).subscribe(
      (data) => {
        localStorage.setItem('token', String(data));
        this.router.navigate(['/cliente/home']);
    });
  }

  logout(){
    localStorage.removeItem('token');
    this.router.navigate(['/login']);
  }

  
  
}
