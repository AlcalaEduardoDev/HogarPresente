export class JwtDto {
    id: number;
    token: string;
    type: string;
    correo: string;
    authorities: string[];
    nombre: string;
    apellido: string;
    imagenId: number;
    edad: string;
    estudios: string;
}
