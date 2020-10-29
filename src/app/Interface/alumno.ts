import { StringifyOptions } from 'querystring';

export interface Alumno {
    id?: number;
    icon: string;
    nombre:string;
    apellido:string;
    email: string;
    pass: string;
    token?: string;
    idToken?: string;
}
