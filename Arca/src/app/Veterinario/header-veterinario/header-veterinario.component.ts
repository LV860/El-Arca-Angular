import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Veterianario } from 'src/app/interfaces-springboot/Veterinario';
import { ClienteService } from 'src/app/service/cliente.service';
import { VeterinarioService } from 'src/app/service/veterinario.service';

@Component({
  selector: 'app-header-veterinario',
  templateUrl: './header-veterinario.component.html',
  styleUrls: ['./header-veterinario.component.css']
})
export class HeaderVeterinarioComponent {

  constructor(private router: Router, private route: ActivatedRoute, private veterinarioService: VeterinarioService) { }

  veterinario!: Veterianario;
  id!: number;
  logOut() {
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
    this.veterinarioService.vetetinarioHome().subscribe(
      (data) => {
        this.veterinario = data;
      }
    )
  }

  perfil() {
    //const id = this.veterinarioService.getVeterinarioPerfil().id;
    //console.log("Id veterinario: " +id);
    this.router.navigate(['/veterinario/home']);
  }
}


