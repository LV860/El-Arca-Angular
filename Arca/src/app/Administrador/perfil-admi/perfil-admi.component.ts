import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Administrador } from 'src/app/interfaces-springboot/Administrador';
import { AdministradorService } from 'src/app/service/administrador.service';

@Component({
  selector: 'app-perfil-admi',
  templateUrl: './perfil-admi.component.html',
  styleUrls: ['./perfil-admi.component.css']
})
export class PerfilAdmiComponent {

  administrador: Administrador = {
    id: 0,
    usuario: '',
    contrasenia: '',
    
  };

  constructor(
    private administradorService: AdministradorService,
    private route: ActivatedRoute // Agregamos ActivatedRoute para obtener parámetros de la ruta
  ) {}

  ngOnInit(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.administradorService.findById(id).subscribe((vet) => {
      this.administrador = vet;
    })
  }

}
