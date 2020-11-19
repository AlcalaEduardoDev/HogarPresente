export class NuevoUsuario {
    correo: string;
    nombre: string;
    apellido: string;
    clave: string;
    constructor(nombre: string, apellido: string,correo: string, clave: string) {
        this.correo = correo;
        this.nombre = nombre;
        this.apellido = apellido;
        this.clave = clave;
    }
}
