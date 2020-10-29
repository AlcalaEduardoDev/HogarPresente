import { Alumno } from './alumno';
import { Curso } from './curso';

export interface Inscripcion {
    fecha: Date;
    alumno: Alumno;
    curso: Curso;
}
