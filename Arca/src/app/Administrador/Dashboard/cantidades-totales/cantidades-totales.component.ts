import { Component } from '@angular/core';
import { DashboardService } from 'src/app/service/dashboard.service';

@Component({
  selector: 'app-cantidades-totales',
  templateUrl: './cantidades-totales.component.html',
  styleUrls: ['./cantidades-totales.component.css']
})
export class CantidadesTotalesComponent {
  totalVeterinariosActivos: number = 0;
  totalVeterinariosInactivos: number = 0;

  totalMascotas: number = 0;
  totalMascotasEnTratamiento: number = 0;


  constructor( private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.dashboardService.findCantidadVeterinariosActivos().subscribe((total) => {
      this.totalVeterinariosActivos = total;
      
    })

    this.dashboardService.findCantidadVeterinariosInactivos().subscribe((total) => {
      this.totalVeterinariosInactivos = total;
      
    })

    this.dashboardService.findTotalMascotas().subscribe((total) => {
      this.totalMascotas = total;
      
    })

    this.dashboardService.findTotalMascotasActivas().subscribe((total) => {
      this.totalMascotasEnTratamiento = total;
      
    })
  }



  
}
