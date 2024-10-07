import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/interfaces-springboot/Cliente';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-clientes-add',
  templateUrl: './clientes-add.component.html',
  styleUrls: ['./clientes-add.component.css']
})
export class ClientesAddComponent {


  formCliente: Cliente = {
    correo: '',
    celular: '',
    nombre: '',
    estado: '',
    cedula: 0,
    id: 0,
    mascotas: [] // Puedes dejarlo vacío o como undefined
  };


  constructor(private clienteService: ClienteService, private router: Router) {}

  addCliente(cliente: Cliente) {
    this.clienteService.addCliente(cliente).subscribe(
      (newCliente) => {
        this.router.navigate(['/clientes']); // Navigate back to the table after successful operation
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
