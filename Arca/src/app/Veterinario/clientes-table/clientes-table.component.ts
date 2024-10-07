import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/interfaces-springboot/Cliente';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-clientes-table',
  templateUrl: './clientes-table.component.html',
  styleUrls: ['./clientes-table.component.css']
})
export class ClientesTableComponent {

  

  selectedCliente!: Cliente;
  //BD Lista
  clientesList: Cliente[] = [];


  //INYECTAR DEPENDENCIAS
  constructor(private router: Router, private route: ActivatedRoute, private clienteService: ClienteService) {}

  ngOnInit(): void {
    
    this.tablaCliente();
    };

  
  tablaCliente() {
    this.clienteService.findAll().subscribe((clientes) => {
      this.clientesList = clientes;
    })
  }

  editarCliente(id: number) {
    
    console.log( "ID: " +id);
    if (id) {
      this.selectedCliente = this.clientesList.find(cliente => cliente.id === id)!;
      this.router.navigate(['clientesDetail', id]);
      this.clienteService.setClienteEdit(this.selectedCliente);
      //console.log( "Seleccionado: " +this.selectedCliente.nombre);
    } else {
      console.error('ID del cliente no está definido');
    }
  }

  
  eliminarCliente(cliente: Cliente) {
    var index = this.clientesList.indexOf(cliente);
    this.clientesList.splice(index, 1);
    this.clienteService.deleteById(cliente.id);
  }

}
