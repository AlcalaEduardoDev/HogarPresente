import { Component, OnInit } from '@angular/core';
import { Curso } from 'src/app/Interface/curso';
import { ListaCursosService } from 'src/app/Service/lista-cursos.service';

@Component({
  selector: 'app-lista-cursos',
  templateUrl: './lista-cursos.component.html',
  styleUrls: ['./lista-cursos.component.css']
})
export class ListaCursosComponent implements OnInit {

  constructor(private listaCursosService:ListaCursosService) { }
  p='';
  filter="";
  public cursos:Array<Curso>=[];
  public cursoActivo : Curso;


  ngOnInit(): void {
    this.listaCursosService
    .findAll()
    .subscribe((response: Array<Curso>) =>{
      this.cursos=response;
    }
    )
  }



}
