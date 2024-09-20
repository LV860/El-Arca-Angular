import { Component, EventEmitter, Output } from '@angular/core';
import { Mascota } from 'src/app/interfaces-springboot/Mascota';

@Component({
  selector: 'app-mascotas-add',
  templateUrl: './mascotas-add.component.html',
  styleUrls: ['./mascotas-add.component.css']
})
export class MascotasAddComponent {


  //Mascota se transmita al componente
  @Output()
  addMascotaEvent = new EventEmitter<Mascota>();

  sendMascota!: Mascota;

  //agregar mascota del form
  formMascota: Mascota = {
    id: 0,
    nombre: '',
    raza: '',
    edad: 0,
    peso: 0,
    enfermedad: '',
    urlImagen: '',
    cedulaDuenho: 0,
    estado: '',
  };


//Agregar una mascota a partir del form
  addMascota(){
    console.log(this.formMascota);
    //copiar valores
    this.sendMascota = Object.assign({}, this.formMascota);
    this.addMascotaEvent.emit(this.formMascota);
  }
}
