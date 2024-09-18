import { Mascota } from "./mascota";

export interface Cliente{
    correo: string;
    celular: string;
    nombre: string;
    estado: string;
    cedula: number;
    mascotas?: Mascota[];
}