import { Cliente } from "./Cliente";
import { Droga } from "./Droga";
import { Veterianario } from "./Veterinario";

export interface Tratamiento{
    precio: number;
    fecha: string;
    //id?: number; 
    cliente?: Cliente;
    veterinario?: Veterianario;
    droga?: Droga;
}