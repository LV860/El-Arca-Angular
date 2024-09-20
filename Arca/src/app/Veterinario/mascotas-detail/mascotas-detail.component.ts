import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mascota } from 'src/app/interfaces-springboot/Mascota';
import { MascotaService } from 'src/app/service/mascota.service';

@Component({
  selector: 'app-mascotas-detail',
  templateUrl: './mascotas-detail.component.html',
  styleUrls: ['./mascotas-detail.component.css'],
})
export class MascotasDetailComponent implements OnInit {
  //Atributos
  mascota!: Mascota;

  //agregar mascota del form
  formMascota: Mascota = {
    id: 0,
    nombre: '',
    raza: '',
    edad: 0,
    peso: 0,
    enfermedad: '',
    urlImagen: '',
    cedulaDuenho: 0,
    estado: '',
  };

  //Imyectar dependencias
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private mascotaService: MascotaService
  ) {}

  //Llmado al componente para el servicio
  ngOnInit(): void {
    console.log('ngOnInit de detail');
    // Llamado al API
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.mascota = this.mascotaService.findById(id);
    if (this.mascota) {
      this.formMascota = { ...this.mascota };
    }
  }

  updateMascota() {
    console.log(this.formMascota);
    this.mascotaService.updateMascota(this.formMascota);
    this.router.navigate(['/mascotas']); // Navigate back to the table
  }
}
