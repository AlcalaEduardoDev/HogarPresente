export class NuevoCurso {      
    nombre : string;
    subtitulo: string;
    descripcion : string;
    categoria : string;
    precio : number;
    imagen : string;
    idAdministrador: number;
    constructor(nombre:string,subtitulo: string, descripcion: string, categoria: string, precio: number, imagen: string, idAdmin: number){
        this.nombre = nombre;
        this.subtitulo=subtitulo;
        this.descripcion = descripcion;
        this.categoria = categoria;
        this.precio = precio;
        this.imagen = imagen;
        this.idAdministrador = idAdmin;
    }
}
