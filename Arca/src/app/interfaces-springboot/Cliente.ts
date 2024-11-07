import { Mascota } from "./Mascota";

export interface Cliente{
    correo: string;
    celular: string;
    nombre: string;
    estado: string;
    cedula: string;
    id: number;
    mascotas?: Mascota[];
}