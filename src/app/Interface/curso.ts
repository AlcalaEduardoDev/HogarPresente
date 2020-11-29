import { Unidad } from './unidad';

export interface Curso {
    id?: number;
    imagen: string;
    nombre: string;
    titulo: string;
    descripcion: string;
    precio:number;
    capacitador:string;
    categoria : string;
    unidades: Array<Unidad>;
}
