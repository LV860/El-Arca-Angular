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

  constructor(private router: Router, private route: ActivatedRoute, private administradorService: AdministradorService) { }

  id!: number;
  logOut() {
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
    this.id = this.administradorService.getAdministradorPerfil().id;
  }

  perfil() {
    const id = this.administradorService.getAdministradorPerfil().id;
    console.log("Id veterinario: " +id);
    this.router.navigate(['/', id]);
  }

}
