import {ContenidoUnidades} from './contenido-unidades';

export interface Unidad {
    nombre: string;
    desc: string;
    contUnidad : Array<ContenidoUnidades>;
    unidadOpen : boolean;
}
