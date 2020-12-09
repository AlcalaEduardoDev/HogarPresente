export class NuevoCurso {      
    titulo : string;
    subtitulo: string;
    descripcion : string;
    categoria : string;
    precio : number;
    usuarioId: number;
    habilitado: boolean = false;
    constructor(titulo:string,subtitulo: string, descripcion: string, categoria: string, precio: number, usuarioId: number){
        this.titulo = titulo;
        this.subtitulo=subtitulo;
        this.descripcion = descripcion;
        this.categoria = categoria;
        this.precio = precio;
        this.usuarioId = usuarioId;
    }
}
