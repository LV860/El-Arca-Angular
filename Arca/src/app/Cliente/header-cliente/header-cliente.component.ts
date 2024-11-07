import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/interfaces-springboot/Cliente';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-header-cliente',
  templateUrl: './header-cliente.component.html',
  styleUrls: ['./header-cliente.component.css']
})
export class HeaderClienteComponent {

  cliente!: Cliente;
  id!: number;

  constructor(private router: Router, private route: ActivatedRoute, private clienteService: ClienteService) { }

  logOut() {
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
    this.clienteService.clienteHome().subscribe(
      (data) => {
        this.cliente = data;
      }
    );
    /*
    const clienteId = this.route.snapshot.params['id']; // Obtén el ID del cliente de la ruta
    this.clienteService.getClienteById(clienteId).subscribe(cliente => {
      this.cliente = cliente;
      this.id = this.cliente.id; // Ahora puedes acceder al ID
    });
    */
  }
  perfil() {
    //console.log("Id cliente: " + this.id);
    this.router.navigate(['/cliente/home']); // Ajusta según tu lógica de navegación
  }

}
