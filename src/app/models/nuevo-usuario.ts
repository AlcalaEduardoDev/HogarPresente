export class NuevoUsuario {
    correo: string;
    nombre: string;
    apellido: string;
    clave: string;
    edad : number;
    estudios : string;
    roles : string;
    constructor(nombre: string, apellido: string, correo: string, clave: string, edad: number, estudios: string, rol: string) {
        this.correo = correo;
        this.nombre = nombre;
        this.apellido = apellido;
        this.clave = clave;
        this.edad = edad;
        this.estudios = estudios;
        this.roles = rol;
    }
}
