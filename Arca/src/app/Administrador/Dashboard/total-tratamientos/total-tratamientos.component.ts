import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DashboardService } from 'src/app/service/dashboard.service';

@Component({
  selector: 'app-total-tratamientos',
  templateUrl: './total-tratamientos.component.html',
  styleUrls: ['./total-tratamientos.component.css']
})
export class TotalTratamientosComponent {
  totalTratamientos: number = 0;
  
  tratamientos: Map<string, number> = new Map(); // Mapa vacío inicialmente


  constructor(private router: Router, private route: ActivatedRoute, private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.dashboardService.findTotalTratamientosUltimoMes().subscribe((total) => {
      this.totalTratamientos = total;
      this.updateChartData();
    })

    this.dashboardService.findTotalTratamientosUltimoMesPorDroga().subscribe((data) => {
      this.tratamientos = new Map(Object.entries(data));;
      this.updateChartData();
    })
  }



  private updateChartData(): void {
    
  }

}
