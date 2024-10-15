import { Cliente } from "./Cliente";
import { Droga } from "./Droga";
import { Veterianario } from "./Veterinario";

export interface Tratamiento{
    id: number; 
    precio: number;
    mascotaIdLong: number;
    veterinarioIdLong: number;
    fecha: string;
    drogaIdLong: number;
}