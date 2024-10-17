import { Component } from '@angular/core';
import { Tratamiento } from 'src/app/interfaces-springboot/Tratamiento';
import { DashboardService } from 'src/app/service/dashboard.service';

@Component({
  selector: 'app-ventas-ganancias',
  templateUrl: './ventas-ganancias.component.html',
  styleUrls: ['./ventas-ganancias.component.css']
})
export class VentasGananciasComponent {


  totalVentas: number = 0;
  totalGanancias: number = 0;

  tratamientos: Tratamiento[] = [];

  constructor( private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.dashboardService.findTotalVentas().subscribe((total) => {
      this.totalVentas = total;
      
    })

    this.dashboardService.findTotalGanancias().subscribe((total) => {
      this.totalGanancias = total;
      
    })

    this.tablaTratamientos();

  }

  tablaTratamientos() {
    this.dashboardService.findTop3TratamientosMasCaros().subscribe((top3) => {
      this.tratamientos = top3;
    })
  }

}
