export class NuevoContenido {
    unidadId: number;
    nombre: string;
    descripcion: string;
    documento?: string;
    constructor(nombre, descripcion, documento, unidadId) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.documento = descripcion;
        this.unidadId = unidadId;
    }
}
