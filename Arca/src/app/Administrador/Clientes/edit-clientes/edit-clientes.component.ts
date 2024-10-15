import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/interfaces-springboot/Cliente';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-edit-clientes',
  templateUrl: './edit-clientes.component.html',
  styleUrls: ['./edit-clientes.component.css']
})
export class EditClientesComponent {
  cliente: Cliente = {
    correo: '',
    celular: '',
    nombre: '',
    estado: '',
    cedula: 0,
    id: 0,
    mascotas: [] // Puedes dejarlo vacío o como undefined
  };


  constructor(private router: Router, private route: ActivatedRoute, private clienteService: ClienteService) {}

  ngOnInit(): void {
    console.log('ngOnInit de detail');
    // Llamado al API
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.clienteService.findById(id).subscribe((cliente) => {
      this.cliente = cliente;
    })
  }

    /*
    guardarCambios(cliente: Cliente) {
      this.clienteService.updateCliente(cliente);
      console.log( "Nombre: " +cliente.nombre);
      this.router.navigate(['clientes']);
    }
*/
    guardarCambios(cliente: Cliente) {
      this.clienteService.addCliente(cliente).subscribe(
        (newCliente) => {
          this.router.navigate(['/clientesAdmin']); // Navigate back to the table after successful operation
        },
        (error) => {
          console.error('Error:', error);
        }
      );
    }

}
