import {ContenidoUnidades} from './contenido-unidades';

export interface Unidad {
    id:number;
    nombre: string;
    descripcion: string;
    contenidos : Array<ContenidoUnidades>;
}
