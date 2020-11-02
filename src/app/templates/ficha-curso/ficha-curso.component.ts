import { Component, Input, OnInit } from '@angular/core';
import { Unidad } from 'src/app/Interface/unidad';
import { ListaCursosService } from 'src/app/Service/lista-cursos.service';
import { Curso } from '../../interface/curso'
@Component({
  selector: 'app-ficha-curso',
  templateUrl: './ficha-curso.component.html',
  styleUrls: ['./ficha-curso.component.css']
})
export class FichaCursoComponent implements OnInit {
 
 
  constructor(public dataService:ListaCursosService) { 

  }
  
  curso : Curso = this.dataService.cursoActivo;
  unidades : Array<Unidad> = this.curso.unidades;

  ngOnInit(): void {
  }

}
