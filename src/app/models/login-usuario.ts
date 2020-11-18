export class LoginUsuario {
    correo: string;
    password: string;
    constructor(mail:string, pass:string){
        this.correo=mail;
        this.password=pass;
    }
}
