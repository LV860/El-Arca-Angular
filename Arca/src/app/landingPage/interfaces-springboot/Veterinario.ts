import { Tratamiento } from "./Tratamiento";

export interface Veterianario{
    cedula: string;
    contrasena: string;
    especialidad: string;
    urlImagen?: string;
    nombre: string;
    tratamientos?: Tratamiento[];
}