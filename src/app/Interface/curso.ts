import { Unidad } from './unidad';

export interface Curso {
    id?: number;
    imagen: string;
    nombre: string;
    descripcion: string;
    precio:number;
    capacitador:string;
    categoria : string;
    unidades: Array<Unidad>;
    habilitado : boolean;
}
