import { Tratamiento } from "./Tratamiento";

export interface Droga{
    nombre: string;
    precioCompra: number;
    precioVenta: number;
    unidadesDisponibles: number;
    unidadesVendidas: number;
    //id?: number;
    tratamientos: Tratamiento[];
}