import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from 'src/app/service/cliente.service';
import { Cliente } from 'src/app/interfaces-springboot/Cliente';
import { Mascota } from 'src/app/interfaces-springboot/Mascota';
import { MascotaService } from 'src/app/service/mascota.service';
import { Tratamiento } from 'src/app/interfaces-springboot/Tratamiento';
import { TratamientoService } from 'src/app/service/tratamiento.service';

@Component({
  selector: 'app-perfil-cliente',
  templateUrl: './perfil-cliente.component.html',
  styleUrls: ['./perfil-cliente.component.css']
})

export class PerfilClienteComponent implements OnInit{

  cliente: Cliente = {
    id: 0,
    cedula: 0,
    nombre: '',
    correo: '',
    celular: '',
    estado: '',
    mascotas: [] // Asegúrate de incluir mascotas si se necesita en el futuro
  };

  selectedMascotaId: number | null = null;
  //BD Lista
  tratamientosList: Tratamiento[] = [];

  constructor(
    private tratamientoService : TratamientoService,
    private clienteService: ClienteService,
    private route: ActivatedRoute // Agregamos ActivatedRoute para obtener parámetros de la ruta
  ) {}

  ngOnInit(): void {

    this.clienteService.clienteHome().subscribe(
      (data) => {
        this.cliente = data;
      }
    );


    /*
    const cedula = Number(this.route.snapshot.paramMap.get('cedula'));
    this.clienteService.findByCedula(cedula).subscribe(
      (data: Cliente) => {
        this.cliente = data; // Asigna la información del cliente
      },
      error => {
        console.error('Error al obtener el cliente:', error);
      }
    );

    */
  }

  mostrarTratamientos(mascotaId: number) {
    this.selectedMascotaId = mascotaId;
    this.tratamientoService.getTratamientosByMascotaId(mascotaId).subscribe((tratamientos) => {
      this.tratamientosList = tratamientos;
      console.log(this.tratamientosList);
    });
  }
}
