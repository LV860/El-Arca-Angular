import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Mascota } from 'src/app/interfaces-springboot/Mascota';
import { MascotaService } from 'src/app/service/mascota.service';

@Component({
  selector: 'app-mascotas-table',
  templateUrl: './mascotas-table.component.html',
  styleUrls: ['./mascotas-table.component.css'],
})
export class MascotasTableComponent implements OnInit {

  //ATRIBUTOS
  selectedMascota!: Mascota;
  //BD QUEMADA
  mascotasList: Mascota[] = [];

  //INYECTAR DEPENDENCIAS
  constructor(private router: Router, private mascotaService: MascotaService) {}

  ngOnInit(): void {
    this.mascotasList=this.mascotaService.findAll();
    };


    mostrarMascota(id: number) {
      this.router.navigate(['mascotasDetail', id]);
    }

    eliminarMascota(mascota: Mascota) {
      var index = this.mascotasList.indexOf(mascota);
      this.mascotasList.splice(index, 1);
    }

}