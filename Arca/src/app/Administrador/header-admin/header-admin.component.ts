import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Administrador } from 'src/app/interfaces-springboot/Administrador';
import { AdministradorService } from 'src/app/service/administrador.service';

@Component({
  selector: 'app-header-admin',
  templateUrl: './header-admin.component.html',
  styleUrls: ['./header-admin.component.css']
})
export class HeaderAdminComponent {

  admin!: Administrador;
  id!: number;

  constructor(private router: Router, private route: ActivatedRoute, private adminService: AdministradorService) { }

  logOut() {
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
    const clienteId = this.route.snapshot.params['id']; // Obtén el ID del cliente de la ruta
    this.adminService.findById(clienteId).subscribe(cliente => {
      this.admin = cliente;
      this.id = this.admin.id; // Ahora puedes acceder al ID
    });
  }
  perfil() {
    console.log("Id cliente: " + this.id);
    this.router.navigate(['/', this.id]); // Ajusta según tu lógica de navegación
  }

}
