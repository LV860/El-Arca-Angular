import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VeterinarioService } from 'src/app/service/veterinario.service';
import { Tratamiento } from 'src/app/interfaces-springboot/Tratamiento';
import { Veterianario } from 'src/app/interfaces-springboot/Veterinario';

@Component({
  selector: 'app-perfil-veterinario',
  templateUrl: './perfil-veterinario.component.html',
  styleUrls: ['./perfil-veterinario.component.css']
})
export class PerfilVeterinarioComponent {


  veterinario: Veterianario = {
    id: 0,
    cedula: '',
    contrasena: '',
    especialidad: '',
    urlImagen: '',
    nombre: '',
    tratamientos: [] as Tratamiento[] 
  };

  constructor(private router: Router, private route: ActivatedRoute, private veterinarioService: VeterinarioService) {}


  ngOnInit(): void {

    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.veterinarioService.findById(id).subscribe((vet) => {
      this.veterinario = vet;
    })

  }

}
