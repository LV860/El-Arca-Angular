import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Mascota } from 'src/app/interfaces-springboot/Mascota';

@Component({
  selector: 'app-mascotas-detail',
  templateUrl: './mascotas-detail.component.html',
  styleUrls: ['./mascotas-detail.component.css'],
})
export class MascotasDetailComponent implements OnInit {
  mascota!: Mascota;

  constructor(private route: ActivatedRoute, private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    if (navigation?.extras?.state) {
      this.mascota = navigation.extras.state['mascota'];
    }
  }

  ngOnInit(): void {}
}