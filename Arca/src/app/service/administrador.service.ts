import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Administrador } from '../interfaces-springboot/Administrador';

@Injectable({
  providedIn: 'root'
})
export class AdministradorService {

  constructor(
    private http: HttpClient
  ) { }

  static administradorPerfil: Administrador = {
    id: 0,
    usuario: '',
    contrasenia: '',
    
  }


  findAll(){
    return this.http.get<Administrador[]>('http://localhost:8090/admin/all');
  }


  findByUsuario(usuario: string): Observable<Administrador> {
    
    return this.http.get<Administrador>('http://localhost:8090/admin/findUsuario/' + usuario);
  }

  findById(id: number):Observable<Administrador> {
    return this.http.get<Administrador>('http://localhost:8090/admin/find/' + id)
  }


  setAdministradorPerfil(administrador: Administrador) {
    AdministradorService.administradorPerfil = administrador;
  }

  // Método para obtener un cliente por ID
  getAdministradorPerfil(): Administrador {
    //return this.http.get<Cliente>(`http://localhost:8090/clientes/find?id=`);
    return AdministradorService.administradorPerfil;
  }
}
