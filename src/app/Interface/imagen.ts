import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})

export class Imagen{
    id?:number;
    name : string;
    imagenUrl: string;
    imagenId: string;
}