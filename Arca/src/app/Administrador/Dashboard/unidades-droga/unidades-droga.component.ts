import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from 'src/app/service/cliente.service';
import { DashboardService } from 'src/app/service/dashboard.service';

@Component({
  selector: 'app-unidades-droga',
  templateUrl: './unidades-droga.component.html',
  styleUrls: ['./unidades-droga.component.css']
})
export class UnidadesDrogaComponent {

  id: number = 1;
  unidadesVendidas: number = 0;
  unidadesDisponibles: number = 0;

  barChartData: number[] = [0, 0]; // Inicializa con valores por defecto
  barChartLabels = ['Unidades Vendidas', 'Unidades Disponibles'];

  constructor(private router: Router, private route: ActivatedRoute, private dashboardService: DashboardService) {}

  ngOnInit(): void {
    this.dashboardService.findUnidadesVendidasById(this.id).subscribe((unidades) => {
      this.unidadesVendidas = unidades;
      this.updateChartData(); // Actualiza los datos del gráfico
    });

    this.dashboardService.findUnidadesDisponiblesById(this.id).subscribe((unidades) => {
      this.unidadesDisponibles = unidades;
      this.updateChartData(); // Actualiza los datos del gráfico
    });
  }



  private updateChartData(): void {
    this.barChartData = [this.unidadesVendidas, this.unidadesDisponibles];
    console.log(this.barChartData); // Para verificar los valores actualizados
  }


  public onSubmit(): void {
    this.dashboardService.findUnidadesVendidasById(this.id).subscribe((unidades) => {
      this.unidadesVendidas = unidades;
      this.updateChartData(); // Actualiza los datos del gráfico
    });

    this.dashboardService.findUnidadesDisponiblesById(this.id).subscribe((unidades) => {
      this.unidadesDisponibles = unidades;
      this.updateChartData(); // Actualiza los datos del gráfico
    });
    
  }



}
