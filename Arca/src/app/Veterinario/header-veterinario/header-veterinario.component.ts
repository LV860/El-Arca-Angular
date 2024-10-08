import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from 'src/app/service/cliente.service';
import { VeterinarioService } from 'src/app/service/veterinario.service';

@Component({
  selector: 'app-header-veterinario',
  templateUrl: './header-veterinario.component.html',
  styleUrls: ['./header-veterinario.component.css']
})
export class HeaderVeterinarioComponent {

  constructor(private router: Router, private route: ActivatedRoute, private veterinarioService: VeterinarioService) { }

  id!: number;
  logOut() {
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
    this.id = this.veterinarioService.getVeterinarioPerfil().id;
  }

  perfil() {
    const id = this.veterinarioService.getVeterinarioPerfil().id;
    console.log("Id veterinario: " +id);
    this.router.navigate(['/', id]);
  }
}


