import { Injectable } from '@angular/core';
import { Veterianario } from '../interfaces-springboot/Veterinario';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VeterinarioService {

  


  private veterinarioList: Veterianario[] = [];


  private veterinarioPerfil!: Veterianario;

  
  
  constructor(
    private http: HttpClient
  ) { }


  setVeterinarioPerfil(veterinario: Veterianario) {
    this.veterinarioPerfil = veterinario;
  }

  getVeterinarioPerfil(): Veterianario{
    return this.veterinarioPerfil
  }


  findAll(){
    return this.http.get<Veterianario[]>('http://localhost:8090/clientes/perfil');
  }

  findById(id: number):Observable<Veterianario> {
    return this.http.get<Veterianario>('http://localhost:8090/clientes/findVeterinario?id=' + id)
  }

}
