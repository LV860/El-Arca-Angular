import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ClienteService } from 'src/app/service/cliente.service';

@Component({
  selector: 'app-header-veterinario',
  templateUrl: './header-veterinario.component.html',
  styleUrls: ['./header-veterinario.component.css']
})
export class HeaderVeterinarioComponent {

  constructor(private router: Router, private route: ActivatedRoute, private clienteService: ClienteService) { }


  logOut() {
    this.router.navigate(['/']);
  }


}
