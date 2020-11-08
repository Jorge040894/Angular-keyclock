import { Alumno } from './alumno';

export class Curso {
    id: number;
    nombre: String;
    creteAt: String;
    alumnos: Alumno[]=[];
}
