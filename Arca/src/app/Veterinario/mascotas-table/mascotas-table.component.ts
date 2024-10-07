import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { mergeMap } from 'rxjs';
import { Mascota } from 'src/app/interfaces-springboot/Mascota';
import { MascotaService } from 'src/app/service/mascota.service';

@Component({
  selector: 'app-mascotas-table',
  templateUrl: './mascotas-table.component.html',
  styleUrls: ['./mascotas-table.component.css'],
})
export class MascotasTableComponent implements OnInit {

  //ATRIBUTOS
  @Input()
  selectedMascota!: Mascota;
  //BD Lista
  mascotasList: Mascota[] = [];


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


    editarMascota(id: number) {
      this.router.navigate(['mascotasDetail', id]);


      console.log( "ID: " +id);
    if (id) {
      this.router.navigate(['mascotasDetail', id]);
      
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