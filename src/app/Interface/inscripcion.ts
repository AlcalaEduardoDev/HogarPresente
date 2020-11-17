import { Alumno } from './alumno';
import { Curso } from './curso';

export interface Inscripcion {
    id : number;
    fecha: Date;
    alumno: Alumno;
    curso: Curso;
}
