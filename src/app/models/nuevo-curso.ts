export class NuevoCurso {      
    titulo : string;
    subtitulo: string;
    descripcion : string;
    categoria : string;
    precio : number;
    imagen : string;
    usuarioId: number;
    habilitado: boolean = false;
    constructor(titulo:string,subtitulo: string, descripcion: string, categoria: string, precio: number, imagen: string, usuarioId: number){
        this.titulo = titulo;
        this.subtitulo=subtitulo;
        this.descripcion = descripcion;
        this.categoria = categoria;
        this.precio = precio;
        this.imagen = imagen;
        this.usuarioId = usuarioId;
    }
}
