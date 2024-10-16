import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tratamiento } from 'src/app/interfaces-springboot/Tratamiento';
import { TratamientoService } from 'src/app/service/tratamiento.service';

@Component({
  selector: 'app-tratamientos-table',
  templateUrl: './tratamientos-table.component.html',
  styleUrls: ['./tratamientos-table.component.css']
})
export class TratamientosTableComponent {


  @Input() mascotaId: number | null = null;

   //INYECTAR DEPENDENCIAS
   constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tratamientoService: TratamientoService) {}

    //BD Lista
    tratamientosList: Tratamiento[] = [];

    tratamientosTable() {
      this.tratamientoService.getTratamientosByMascotaId(this.mascotaId!).subscribe((tratamientos) => {
        this.tratamientosList = tratamientos;
      })
    }



}
