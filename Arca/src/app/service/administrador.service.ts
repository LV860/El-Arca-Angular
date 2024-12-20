import { HttpClient,HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Administrador } from '../interfaces-springboot/Administrador';
import { UserAdmin } from '../interfaces-springboot/UserAdmin';

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
    contrasena: '',
    
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

  adminLogin(userAdmin: UserAdmin): Observable<String>{
    return this.http.post('http://localhost:8090/admin/login', userAdmin,{
      responseType: 'text'
    });
  }

  adminHome(): Observable<Administrador>{
    return this.http.get<Administrador>('http://localhost:8090/admin/details');
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
