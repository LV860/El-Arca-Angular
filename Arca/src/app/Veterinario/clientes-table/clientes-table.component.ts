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

  
  //ATRIBUTOS
  @Input()
  selectedCliente!: Cliente;
  //BD Lista
  clientesList: Cliente[] = [];


  //INYECTAR DEPENDENCIAS
  constructor(private router: Router, private route: ActivatedRoute, private clienteService: ClienteService) {}

  ngOnInit(): void {
    this.clienteService.findAll().subscribe((clientes) => {
      this.clientesList = clientes;
    })
    };


    mostrarCliente(id: number) {
      this.router.navigate(['clientesDetail', id]);
    }

    
    eliminarCliente(cliente: Cliente) {
      var index = this.clientesList.indexOf(cliente);
      this.clientesList.splice(index, 1);
      this.clienteService.deleteById(cliente.cedula);
    }

}
