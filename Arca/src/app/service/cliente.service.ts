import { Injectable } from '@angular/core';
import { Cliente } from '../interfaces-springboot/Cliente';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private clientesList: Cliente[] = [];


  private clienteEdit!: Cliente;

  
  
  constructor(
    private http: HttpClient
  ) { }

  addCliente(cliente: Cliente) {
    //mascota.id = await this.generateUniqueId();
    // En este caso la información va por el cuerpo de la petición, primero la url y luego la info que envío
    this.http.post('http://localhost:8090/clientes/add', cliente).subscribe();
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

  private async generateUniqueId(): Promise<number> {
    const mascotasList = await this.findAll().toPromise();
    return mascotasList!.length + 1;
  }


  setClienteEdit(cliente: Cliente) {
    this.clienteEdit = cliente;
  }

  getClienteEdit(): Cliente {
    return this.clienteEdit;
  }
}
