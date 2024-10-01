import { Component, OnInit } from '@angular/core';
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
  selectedMascota!: Mascota;
  //BD QUEMADA
  mascotasList: Mascota[] = [];

  //INYECTAR DEPENDENCIAS
  constructor(private router: Router, private route: ActivatedRoute, private mascotaService: MascotaService) {}

  ngOnInit(): void {
      console.log('ngOnInit de table');
      // Llamado al API
      this.route.paramMap.subscribe(params => {
        const id = Number(params.get('id'));

        this.mascotaService.findById(id).pipe(
          mergeMap(
            (mascotaInfo) => {
              this.mascota = mascotaInfo;
            }
          )
        )
      })
    };


    mostrarMascota(id: number) {
      this.router.navigate(['mascotasDetail', id]);
    }

    eliminarMascota(mascota: Mascota) {
      var index = this.mascotasList.indexOf(mascota);
      this.mascotasList.splice(index, 1);
    }

}