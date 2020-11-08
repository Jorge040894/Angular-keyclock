import { Component, OnInit } from '@angular/core';
import { Alumno } from 'src/app/models/alumno';
import { AlumnoService } from 'src/app/services/alumno.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  titulo='Listado de Alumnos';
  alumnos: Alumno[];
  isAdmin: boolean;
  constructor(private service: AlumnoService, private loginService: LoginService) { }

  ngOnInit(): void {
    this.service.listar().subscribe(alumnos => {
this.alumnos= alumnos;
this.isAdmin= this.loginService.getIsAdmin(); 
    });
  }

  public eliminar(alumno: Alumno): void{
    if(confirm(`¿Seguro que desea eliminar a ${alumno.nombre} ?`)){
      this.service.eliminar(alumno.id).subscribe(()=>{
        this.alumnos = this.alumnos.filter(a=> a !==alumno);
        alert(`${alumno.nombre} Eliminado con éxito`)
      });
    }

  }

}
