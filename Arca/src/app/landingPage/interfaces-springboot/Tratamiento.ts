import { Cliente } from "./cliente";
import { Droga } from "./droga";
import { Veterianario } from "./veterinario";

export interface Tratamiento{
    precio: number;
    fecha: string;
    //id?: number; 
    cliente?: Cliente;
    veterinario?: Veterianario;
    droga?: Droga;
}