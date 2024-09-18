import { Cliente } from "./Cliente";

export interface Mascota{
    nombre: string;
    raza: string;
    edad: number;
    peso: number;
    enfermedad?: string;
    urlImagen?: string;
    cedulaDuenho: number;
    estado: string;
    //id?: number;
    cliente?: Cliente;
}