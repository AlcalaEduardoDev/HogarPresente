import { Unidad } from './unidad';

export class Curso {
    id?: string;
    imagen: string;
    titulo: string;
    subtitulo: string;
    descripcion: string;
    precio:number;
    capacitador:string;
    categoria : string;
    habilitado : boolean;
    unidades: Array<Unidad>;
}
