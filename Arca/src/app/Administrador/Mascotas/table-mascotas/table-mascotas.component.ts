import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mascota } from 'src/app/interfaces-springboot/Mascota';
import { MascotaService } from 'src/app/service/mascota.service';

@Component({
  selector: 'app-table-mascotas',
  templateUrl: './table-mascotas.component.html',
  styleUrls: ['./table-mascotas.component.css']
})
export class TableMascotasComponent {
  //ATRIBUTOS
  @Input()
  selectedMascota!: Mascota;
  //BD Lista
  mascotasList: Mascota[] = [];

  filterBy: string = 'todos';
  searchQuery: string = '';


  //INYECTAR DEPENDENCIAS
  constructor(private router: Router, private route: ActivatedRoute, private mascotaService: MascotaService) {}

  ngOnInit(): void {
    this.mascotasTable();
  };

  mascotasTable() {
    this.mascotaService.findAll().subscribe((mascotas) => {
      this.mascotasList = mascotas;
    })
  }

  filteredMascotasList() {
    let filteredList = this.mascotasList;

    if (this.filterBy !== 'todos') {
      filteredList = filteredList.filter(mascota => {
        if (this.filterBy === 'id') {
          return mascota.id.toString() === this.searchQuery;
        } else if (this.filterBy === 'nombre') {
          return mascota.nombre.toLowerCase().includes(this.searchQuery.toLowerCase());
        } else if (this.filterBy === 'raza') {
          return mascota.raza.toLowerCase().includes(this.searchQuery.toLowerCase());
        } else if (this.filterBy === 'enfermedad') {
          return mascota.enfermedad!.toLowerCase().includes(this.searchQuery.toLowerCase());
        } else if (this.filterBy === 'inactiva') {
          return mascota.estado === 'Inactiva';
        } else if (this.filterBy === 'en tratamiento') {
          return mascota.estado === 'En tratamiento';
        }
        return true;
      });
    } else {
      filteredList = filteredList.filter(mascota => {
        return mascota.id.toString().includes(this.searchQuery) ||
               mascota.nombre.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
               mascota.raza.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
               mascota.enfermedad!.toLowerCase().includes(this.searchQuery.toLowerCase());
      });
    }

    return filteredList;
  }


    editarMascota(id: number) {
      this.router.navigate(['mascotasDetailAdmin', id]);


      console.log( "ID: " +id);
    if (id) {
      this.router.navigate(['mascotasDetailAdmin', id]);
      
    } else {
      console.error('ID de la mascotano está definida');
    }
    }

    
    eliminarMascota(mascota: Mascota) {
      var index = this.mascotasList.indexOf(mascota);
      this.mascotasList.splice(index, 1);
      this.mascotaService.deleteById(mascota.id);
    }
}
