import { Unidad } from './unidad';

export class Curso {
    id?: string;
    imagen: string;
    nombre: string;
    descripcion: string;
    precio:number;
    capacitador:string;
    categoria : string;
    habilitado : boolean;
    unidades: Array<Unidad>;
}
