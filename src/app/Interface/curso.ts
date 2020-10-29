import { Unidad } from './unidad';


export interface Curso {
    id?: number;
    img: string;
    nom: string;
    titulo: string;
    desc: string;
    unidades: Array<Unidad>;
    precio:number;
    capacitador:string;
}
