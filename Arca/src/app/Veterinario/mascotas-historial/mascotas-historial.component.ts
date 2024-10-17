import { Component, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Tratamiento } from 'src/app/interfaces-springboot/Tratamiento';
import { TratamientoService } from 'src/app/service/tratamiento.service';

@Component({
  selector: 'app-mascotas-historial',
  templateUrl: './mascotas-historial.component.html',
  styleUrls: ['./mascotas-historial.component.css']
})
export class MascotasHistorialComponent {


  @Input() mascotaId: number | null = null;

   //INYECTAR DEPENDENCIAS
   constructor(
    private route: ActivatedRoute,
    private router: Router,
    private tratamientoService: TratamientoService) {}

    //BD Lista
    tratamientosList: Tratamiento[] = [];

    ngOnInit(): void {
      this.mascotaId = Number(this.route.snapshot.paramMap.get('id'));
      console.log(this.mascotaId); // Print mascotaId to the browser console
      if (this.mascotaId !== null) {
        this.fetchTratamientos(this.mascotaId);
      }
    }
  
    fetchTratamientos(mascotaId: number) {
      this.tratamientoService.getTratamientosByMascotaId(mascotaId).subscribe((tratamientos) => {
        this.tratamientosList = tratamientos;
        console.log(tratamientos); // Print tratamientos to the browser console
      });
    }



}
