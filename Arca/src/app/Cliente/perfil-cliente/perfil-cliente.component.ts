import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from 'src/app/service/cliente.service';
import { Cliente } from 'src/app/interfaces-springboot/Cliente';
import { Mascota } from 'src/app/interfaces-springboot/Mascota';
import { MascotaService } from 'src/app/service/mascota.service';

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

  constructor(
    private clienteService: ClienteService,
    private route: ActivatedRoute // Agregamos ActivatedRoute para obtener parámetros de la ruta
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.clienteService.getClienteById(id).subscribe(
      (data: Cliente) => {
        this.cliente = data; // Asigna la información del cliente
      },
      error => {
        console.error('Error al obtener el cliente:', error);
      }
    );
  }

}
