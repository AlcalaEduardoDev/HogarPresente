import { Imagen } from './imagen';
import { Unidad } from './unidad';

export class Curso {
    id?: string;
    id_usuario_creador:number;
    titulo: string;
    subtitulo: string;
    descripcion: string;
    precio: number;
    capacitador: string;
    categoria: string;
    habilitado: boolean;
    imagen: string;
    unidades: Array<Unidad>;
}


