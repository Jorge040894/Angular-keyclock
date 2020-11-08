import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/models/curso';
import { CursoService } from 'src/app/services/curso.service';

@Component({
  selector: 'app-cursos',
  templateUrl: './cursos.component.html',
  styleUrls: ['./cursos.component.css']
})
export class CursosComponent implements OnInit {
titulo: 'Grados';
cursos: Curso[];
  constructor(private service: CursoService) { }

 
    ngOnInit(): void {
      this.service.listar().subscribe(cursos => {
  this.cursos= cursos;
      });
    }
  }


