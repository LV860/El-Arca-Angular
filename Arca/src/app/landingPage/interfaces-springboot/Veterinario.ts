import { Tratamiento } from "./tratamiento";

export interface Veterianario{
    cedula: string;
    contrasena: string;
    especialidad: string;
    urlImagen?: string;
    nombre: string;
    tratamientos?: Tratamiento[];
}