import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from 'src/app/service/cliente.service';
import { Cliente } from 'src/app/interfaces-springboot/Cliente';
import { Mascota } from 'src/app/interfaces-springboot/Mascota';
import { MascotaService } from 'src/app/service/mascota.service';

@Component({
  selector: 'app-mascotas-cliente',
  templateUrl: './mascotas-cliente.component.html',
  styleUrls: ['./mascotas-cliente.component.css'] // O la ruta correspondiente a tus estilos
})
export class MascotasClienteComponent implements OnInit {
  
  cliente: Cliente; // Propiedad para almacenar la información del cliente
  mascotasList: Mascota[] = []; // Lista de mascotas del cliente

  constructor(private clienteService: ClienteService, private mascotaService: MascotaService) {
    this.cliente = {} as Cliente; // Inicialización del cliente
  }

  ngOnInit(): void {
    this.obtenerCliente();
    this.obtenerMascotas();
  }

  // Método para obtener información del cliente (ejemplo, puedes ajustar según tu lógica)
  obtenerCliente(): void {
    const clienteId = 1; // Aquí debes obtener el ID del cliente de acuerdo a tu lógica
    this.clienteService.getClienteEdit(clienteId).subscribe(
      (data: Cliente) => {
        this.cliente = data; // Asigna la información del cliente
      },
      error => {
        console.error('Error al obtener el cliente:', error);
      }
    );
  }

  // Método para obtener las mascotas del cliente
  obtenerMascotas(): void {
    const clienteId = 1; // Aquí también debes obtener el ID del cliente de acuerdo a tu lógica
    this.mascotaService.getMascotasByClienteId(clienteId).subscribe(
      (data: Mascota[]) => {
        this.mascotasList = data; // Asigna la lista de mascotas
      },
    );
  }

  // Método para editar una mascota
  editarMascota(mascotaId: number): void {
    // Redireccionar a la página de edición (ajusta la ruta según tu configuración)
    console.log(`Editando mascota con ID: ${mascotaId}`);
    // Aquí puedes usar el router para redirigir
  }

  // Método para eliminar una mascota
  eliminarMascota(mascota: Mascota) {
    var index = this.mascotasList.indexOf(mascota);
    this.mascotasList.splice(index, 1);
    this.mascotaService.deleteById(mascota.id);
  }
    
}
