import { Injectable } from '@angular/core';
import { Veterianario } from '../interfaces-springboot/Veterinario';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError, Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VeterinarioService {

  


  private veterinarioList: Veterianario[] = [];


  static veterinarioPerfil: Veterianario;

  
  
  constructor(
    private http: HttpClient
  ) { }


  setVeterinarioPerfil(veterinario: Veterianario) {
    VeterinarioService.veterinarioPerfil = veterinario;
  }

  getVeterinarioPerfil(): Veterianario{
    return VeterinarioService.veterinarioPerfil
  }


  findAll(){
    return this.http.get<Veterianario[]>('http://localhost:8090/veterinario/all');
  }

  findById(id: number):Observable<Veterianario> {
    return this.http.get<Veterianario>('http://localhost:8090/veterinario/find/' + id)
  }

  findByCedula(cedula: String): Observable<Veterianario>{
    return this.http.get<Veterianario>('http://localhost:8090/veterinario/findCedula/' + cedula)
  }


  addVeterinario(veterinario: Veterianario): Observable<Veterianario> {
    //console.log(veterinario.estado);
    return this.http.post<Veterianario>('http://localhost:8090/veterinario/add', veterinario).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error:', error);
        return throwError(error);
      })
    );
  }

  deleteById(id: number) {
    console.log(id);
    this.http.delete('http://localhost:8090/veterinario/delete/' + id).subscribe();
  }

  updateVeterinario(veterinario: Veterianario): Observable<Veterianario> {
    return this.http.post<Veterianario>(`http://localhost:8090/veterinario/update/${veterinario.id}`, veterinario).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('Error:', error);
        return throwError(error);
      })
    );
  }

}
