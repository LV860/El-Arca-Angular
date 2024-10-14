import { Injectable } from '@angular/core';
import { Cliente } from '../interfaces-springboot/Cliente';
import { Mascota } from '../interfaces-springboot/Mascota';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private clientesList: Cliente[] = [];


  static clienteEdit: Cliente;
  
  
  constructor(
    private http: HttpClient
  ) { }
/*
  addCliente(cliente: Cliente) {
    //mascota.id = await this.generateUniqueId();
    // En este caso la información va por el cuerpo de la petición, primero la url y luego la info que envío
    this.http.post('http://localhost:8090/clientes/add', cliente).subscribe();
  }
    */

  addCliente(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>('http://localhost:8090/clientes/add', cliente).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error:', error);
        return throwError(error);
      })
    );
  }

  updateCliente1(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(`http://localhost:8090/clientes/update/${cliente.id}`, cliente).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error:', error);
        return throwError(error);
      })
    );
  }

  updateCliente(cliente: Cliente): void {
    this.http.put(`http://localhost:8090/clientes/update/${cliente.id}`, cliente)
      .subscribe({
        next: (response) => {
          console.log('Cliente actualizado con éxito:', response);
        },
        error: (error) => {
          console.error('Error al actualizar el cliente:', error);
        }
      });
  }
      


  findAll(){
    return this.http.get<Cliente[]>('http://localhost:8090/clientes/all');
  }

  findById(id: number):Observable<Cliente> {
    return this.http.get<Cliente>('http://localhost:8090/clientes/find?id=' + id)
  }

  deleteById(id: number) {
    console.log(id);
    this.http.delete('http://localhost:8090/clientes/delete/' + id).subscribe();
  }
  
   // Obtener un cliente por su cédula
  findByCedula(cedula: number): Observable<Cliente> {
    //return this.http.get<Cliente>('http://localhost:8090/dueño/find?cedula=' + cedula);
    //return this.http.get<Cliente>('http://localhost:8090/dueño/perfilCliente?cedula=' + cedula);
    return this.http.get<Cliente>('http://localhost:8090/clientes/findCedula/' + cedula);
  }

  private async generateUniqueId(): Promise<number> {
    const mascotasList = await this.findAll().toPromise();
    return mascotasList!.length + 1;
  }

getClienteById(id: number): Observable<Cliente> {
  return this.http.get<Cliente>(`http://localhost:8090/clientes/find/?id=`).pipe(
    catchError((error: HttpErrorResponse) => {
      console.error('Error al obtener el cliente:', error);
      return throwError(error);
    })
  );
}
/*
// Método para obtener las mascotas de un cliente
getMascotasByClienteId(clienteId: number): Observable<Mascota[]> {
  return this.http.get<Mascota[]>(`http://localhost:8090/mascota/cliente/${clienteId}`).pipe(
    catchError((error: HttpErrorResponse) => {
      console.error('Error al obtener las mascotas:', error);
      return throwError(error);
    })
  );
}*/

  setClienteEdit(cliente: Cliente) {
    ClienteService.clienteEdit = cliente;
  }

  // Método para obtener un cliente por ID
  getClienteEdit(): Cliente {
    //return this.http.get<Cliente>(`http://localhost:8090/clientes/find?id=`);
    return ClienteService.clienteEdit;
  }

}
