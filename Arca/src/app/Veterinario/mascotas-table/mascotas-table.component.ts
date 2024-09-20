import { Component, OnInit } from '@angular/core';
import { NavigationExtras, Router } from '@angular/router';
import { Mascota } from 'src/app/interfaces-springboot/Mascota';
import { MascotaService } from 'src/app/services/mascotaService';

@Component({
  selector: 'app-mascotas-table',
  templateUrl: './mascotas-table.component.html',
  styleUrls: ['./mascotas-table.component.css'],
})
export class MascotasTableComponent implements OnInit {
  selectedMascota!: Mascota;
  mascotasList: Mascota[] = [];

  constructor(private router: Router, private mascotaService: MascotaService) {}

  ngOnInit() {
    this.mascotaService.getMascotas().subscribe((mascotas) => {
      this.mascotasList = mascotas;
    });
  }

  mostrarMascota(mascota: Mascota) {
    const navigationExtras = {
      state: {
        mascota: mascota
      }
    };
    this.router.navigate(['mascotasDetail'], navigationExtras);
  }
}