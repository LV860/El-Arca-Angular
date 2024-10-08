import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/interfaces-springboot/Cliente';
import { Mascota } from 'src/app/interfaces-springboot/Mascota';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-inicio-cliente',
  templateUrl: './inicio-cliente.component.html',
  styleUrls: ['./inicio-cliente.component.css']
})
export class InicioClienteComponent {

  cedula!: number;  
  error: boolean = false;  

  clienteValido: Cliente = {
    id: 0,
    cedula: 0,
    correo: '',
    celular: '',
    nombre: '',
    estado: '',
    mascotas: [] as Mascota[]
  };
  
  constructor(private router: Router, private route: ActivatedRoute,private clienteService: ClienteService) {}

  iniciarSesion() {
    // Llamar al servicio para obtener el cliente por ID
    this.clienteService.findById(this.cedula).subscribe((cliente) => {
      this.clienteValido = cliente;
  
      // Verificar si el ID es correcto
      if (this.clienteValido.id === this.cedula) {
        // Redirigir al perfil del cliente si las credenciales son correctas
        this.router.navigate(['/perfilCliente', this.clienteValido.id]);
      } else {
        this.error = true; // Mostrar mensaje de error si el ID no coincide
      }
    }, (error) => {
      console.error('Error al buscar cliente:', error);
      this.error = true; // Mostrar mensaje de error si la búsqueda falla
    });
  }  
  
}
