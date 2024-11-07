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
    estado: '',
    urlImagen: '',
    nombre: '',
    tratamientos: [] as Tratamiento[] 
  };

  constructor(private router: Router, private route: ActivatedRoute, private veterinarioService: VeterinarioService) {}


  ngOnInit(): void {

    /*const cedula = String(this.route.snapshot.paramMap.get('cedula'));
    
    //console.log('Cédula desde el perfil:', cedula);
    this.veterinarioService.findByCedula(cedula).subscribe(
      (data: Veterianario) => {
      this.veterinario = data;
    },
    error => {
      console.error('Error al obtener el veterinario:', error)
    }
  );
  */

  this.veterinarioService.vetetinarioHome().subscribe(
    (data) => {
      this.veterinario = data
    }
  );



  }
  

}
