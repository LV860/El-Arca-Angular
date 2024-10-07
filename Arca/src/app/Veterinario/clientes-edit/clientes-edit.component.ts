import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/interfaces-springboot/Cliente';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-clientes-edit',
  templateUrl: './clientes-edit.component.html',
  styleUrls: ['./clientes-edit.component.css']
})
export class ClientesEditComponent {

  

  cliente: Cliente = {
    correo: '',
    celular: '',
    nombre: '',
    estado: '',
    cedula: 0,
    id: 0,
    mascotas: [] // Puedes dejarlo vacío o como undefined
  };


  constructor(private router: Router, private route: ActivatedRoute, private clienteService: ClienteService) {}


  ngOnInit(): void {

    this.cliente = this.clienteService.getClienteEdit();
    //console.log(this.cliente.nombre);
    };

    guardarCambios(cliente: Cliente) {
      this.clienteService.updateCliente(cliente);
      console.log( "Nombre: " +cliente.nombre);
      this.router.navigate(['clientes']);
    }

}
