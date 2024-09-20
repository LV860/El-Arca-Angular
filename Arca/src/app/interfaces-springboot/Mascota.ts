import { Cliente } from "./Cliente";

export interface Mascota{
    id: number;
    nombre: string;
    raza: string;
    edad: number;
    peso: number;
    enfermedad?: string;
    urlImagen?: string;
    cedulaDuenho: number;
    estado: string;
    //cliente?: Cliente;
}