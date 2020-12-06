export class NuevoCurso {      
    nombre : string;
    descripcion : string;
    categoria : string;
    precio : number;
    imagen : string;
    idAdministrador: number;
    constructor(titulo: string, descripcion: string, categoria: string, precio: number, imagen: string, idAdmin: number){
        this.nombre = titulo;
        this.descripcion = descripcion;
        this.categoria = categoria;
        this.precio = precio;
        this.imagen = imagen;
        this.idAdministrador = idAdmin;
    }
}
