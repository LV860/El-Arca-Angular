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

  filterBy: string = 'todos';
  searchQuery: string = '';


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

  filteredClientesList() {
    let filteredList = this.clientesList;

    if (this.filterBy !== 'todos') {
      filteredList = filteredList.filter(cliente => {
        if (this.filterBy === 'cedula') {
          return cliente.cedula.toLowerCase() === this.searchQuery.toLowerCase();
        } else if (this.filterBy === 'nombre') {
          return cliente.nombre.toLowerCase() === this.searchQuery.toLowerCase();
        } else if (this.filterBy === 'correo') {
          return cliente.correo.toLowerCase() === this.searchQuery.toLowerCase();
        } else if (this.filterBy === 'telefono') {
          return cliente.celular.includes(this.searchQuery);
        } else if (this.filterBy === 'inactivo') {
          return cliente.estado === 'Inactivo';
        } else if (this.filterBy === 'activo') {
          return cliente.estado === 'Activo';
        }
        return true;
      });
    } else {
      filteredList = filteredList.filter(cliente => {
        return cliente.cedula.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
               cliente.nombre.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
               cliente.correo.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
               cliente.celular.toLowerCase().includes(this.searchQuery.toLowerCase());
      });
    }

    return filteredList;
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
