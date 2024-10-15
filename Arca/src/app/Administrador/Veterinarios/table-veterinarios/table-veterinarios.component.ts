import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Veterianario } from 'src/app/interfaces-springboot/Veterinario';
import { ClienteService } from 'src/app/service/cliente.service';
import { VeterinarioService } from 'src/app/service/veterinario.service';

@Component({
  selector: 'app-table-veterinarios',
  templateUrl: './table-veterinarios.component.html',
  styleUrls: ['./table-veterinarios.component.css']
})
export class TableVeterinariosComponent {


  selectedVeterinario!: Veterianario;
  //BD Lista
  veterinariosList: Veterianario[] = [];

  filterBy: string = 'todos';
  searchQuery: string = '';


  //INYECTAR DEPENDENCIAS
  constructor(private router: Router, private route: ActivatedRoute, private veterinarioService: VeterinarioService) {}

  ngOnInit(): void {
    
    this.tablaCliente();
    };

  
  tablaCliente() {
    this.veterinarioService.findAll().subscribe((veterinarios) => {
      this.veterinariosList = veterinarios;
    })
  }

  filteredVeterinariosList() {
    let filteredList = this.veterinariosList;
  
    if (this.filterBy !== 'todos') {
      filteredList = filteredList.filter(veterinario => {
        if (this.filterBy === 'cedula') {
          return veterinario.cedula.toString() === this.searchQuery;
        } else if (this.filterBy === 'nombre') {
          return veterinario.nombre.toLowerCase() === this.searchQuery.toLowerCase();
        } else if (this.filterBy === 'especialidad') {
          return veterinario.especialidad.toLowerCase() === this.searchQuery.toLowerCase();
        } else if (this.filterBy === 'inactivo') {
          return veterinario.estado === 'Inactivo';
        } else if (this.filterBy === 'activo') {
          return veterinario.estado === 'Activo';
        }
        return true;
      });
    } else {
      filteredList = filteredList.filter(veterinario => {
        return veterinario.cedula.toString().includes(this.searchQuery) ||
          veterinario.nombre.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          veterinario.especialidad.toLowerCase().includes(this.searchQuery.toLowerCase());
      });
    }
  
    return filteredList;
  }
  

  editarVeterinario(id: number) {
    
    console.log( "ID: " +id);
    if (id) {
      this.selectedVeterinario = this.veterinariosList.find(veterinario => veterinario.id === id)!;
      this.router.navigate(['veterinariosDetailAdmin', id]);
      //this.veterinarioService.setVeterinarioPerfil(this.selectedVeterinario);
      //console.log( "Seleccionado: " +this.selectedCliente.nombre);
    } else {
      console.error('ID del cliente no está definido');
    }
  }

  
  eliminarVeterinario(veterinario: Veterianario) {
    var index = this.veterinariosList.indexOf(veterinario);
    this.veterinariosList.splice(index, 1);
    this.veterinarioService.deleteById(veterinario.id);
  }

}
