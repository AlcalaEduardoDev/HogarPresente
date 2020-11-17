import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class Alumno {
    id?: number;
    icon: string;
    nombre:string;
    apellido:string;
    email: string;
    pass: string;
    token?: string;
    idToken?: string;
}
